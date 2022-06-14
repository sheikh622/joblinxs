def IMAGE_NAME = "servic_app_tanza_frontend"
def CONTAINER_NAME = "servic_app_tanza_frontend"
def REPO_URL = "https://github.com/CodeArgon/servic_app_tanza_frontend.git"

pipeline {
  agent any
  stages {
  stage("Clone repository && Initialize") {
     steps {
        script {
          COMMIT_HASH = sh(script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)
          TAG_NAME = "dev-${COMMIT_HASH}"
          BUILD_FOLDER = "build-${COMMIT_HASH}"
        }
        sh "whoami"
        sh "pwd"
        sh "ls -al"
        sh "cat /home/jenkins/jenkins/workspace/workspaces.txt"
        echo sh(script: 'env|sort', returnStdout: true)
        echo "${COMMIT_HASH}"
        echo "${TAG_NAME}"
        echo "${BUILD_FOLDER}"
      }
  }
  stage("Build Image") {
    steps {
      sh "docker image rm $IMAGE_NAME:$TAG_NAME|| true"
      sh "docker build -t $IMAGE_NAME:$TAG_NAME -f Dockerfile ."
    }
  }
  stage("Create Release Build") {
    steps {
      sh "ls -al /home/jenkins/$IMAGE_NAME"
      sh "mkdir -p /home/jenkins/$IMAGE_NAME"
      sh "ls -al /home/jenkins/$IMAGE_NAME"
      sh "docker stop appcon_$GIT_COMMIT || true"
       sh "docker rm appcon_$GIT_COMMIT || true"
      sh "docker run --name appcon_$GIT_COMMIT -v /home/jenkins/$IMAGE_NAME/$BUILD_FOLDER:/app/build -i $IMAGE_NAME:$TAG_NAME npm run build"
      sh "ls -al /home/jenkins/$IMAGE_NAME"
      sh "ls -al /home/jenkins/$IMAGE_NAME/$BUILD_FOLDER"
    }
  }

  stage("Publish Artifacts") {
     when { branch "staging" }
     steps {
       sh "scp -r /home/jenkins/$IMAGE_NAME/$BUILD_FOLDER/* ubuntu@ec2-52-14-121-20.us-east-2.compute.amazonaws.com:/var/www/html/servic_app_tanza_frontend/"
    }
  }
    stage("Remove Images") {
     steps {
       sh "docker stop appcon_$GIT_COMMIT"
       sh "docker rm appcon_$GIT_COMMIT"
       sh "docker rmi -f $IMAGE_NAME:$TAG_NAME"
    }
    }
}
}