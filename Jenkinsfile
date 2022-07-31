def IMAGE_NAME = "servic_app_tanza_frontend"
def HOME = "/home/jenkins"
pipeline {
  agent any
  stages {
  stage("Clone & Initialize repository") {
     steps {
        script {
          COMMIT_HASH = sh(script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)
          TAG_NAME = "dev-${COMMIT_HASH}"
          BUILD_FOLDER = "build-${COMMIT_HASH}"
        }
        sh "whoami"
        sh "pwd"
        sh "ls -al"
        sh "cat ${HOME}/jenkins/workspace/workspaces.txt"
        echo sh(script: 'env|sort', returnStdout: true)
        echo "${COMMIT_HASH}"
        echo "${TAG_NAME}"
        echo "${BUILD_FOLDER}"
      }
  }
  stage("Build Image") {
    when { branch "staging" }
    steps {
      sh "docker image rm $IMAGE_NAME:$TAG_NAME|| true"
      sh "docker build -t $IMAGE_NAME:$TAG_NAME -f Dockerfile ."
    }
  }
  stage("Create Release") {
    when { branch "staging" }
    steps {
      sh "mkdir -p ${HOME}/$IMAGE_NAME"
      sh "ls -al ${HOME}/$IMAGE_NAME"
      sh "docker stop appcon_$GIT_COMMIT || true"
       sh "docker rm appcon_$GIT_COMMIT || true"
      sh "docker run --name appcon_$GIT_COMMIT -v ${HOME}/$IMAGE_NAME/$BUILD_FOLDER:/app/build -i $IMAGE_NAME:$TAG_NAME npm run build"
      sh "ls -al ${HOME}/$IMAGE_NAME"
      sh "ls -al ${HOME}/$IMAGE_NAME/$BUILD_FOLDER"
    }
  }

  stage("Publish Artifacts") {
     when { branch "staging" }
     steps {
       sh "scp -r ${HOME}/$IMAGE_NAME/$BUILD_FOLDER/* ubuntu@18.119.88.138:/var/www/html/servic_app_tanza_frontend/"
    }
  }
    stage("Remove Images & Cleanup") {
     when { branch "staging" }
     steps {
       sh "docker stop appcon_$GIT_COMMIT"
       sh "docker rm appcon_$GIT_COMMIT"
       sh "docker rmi -f $IMAGE_NAME:$TAG_NAME"
    }
    }
}
}
