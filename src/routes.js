
export const Routes = {
    DashboardOverview: { path: "/dashboard" },
    NewArrivalProvider: { path: "/Newarrivalproviders" },
    TopRatedProviders: { path: "/TopRatedProviders" },
    Recommended: { path: "/recommended" },
    Profile: { path: "/profile" },
    CreateJob: {path: '/createJob'},
    Applicants: {path: '/applicants/:jobId'},
    LogHours: {path: '/loghours/:jobId'},
    UpdateJob: {path: '/updateJob/:id'},
    DetailJob: {path: '/detailJob/:id'},
    MyJobDetail: {path: '/jobDetail/:id'},
    DetailProvider: {path: '/detailProvider/:id'},
    UserDetail: {path: '/userDetail'},
    JobDetails: {path: '/jobDetails'},

    Favourites:{path:'/favourites'},
    Job: {path: '/job'},
    EditProfile: { path: "/editProfile" },
    Transactions: { path: "/transactions" },
    UserManagement:{path: "/user_management"},
    Categories: {path:"/categories"},
    Categories_Management: {path:"/category-management"},
    Job_Management: {path:"/job-management"},
    Users: {path:"/users"},
    EditAdminProfile:{path:"/editAdminProfile"},
    AdminProfile:{path:"/AdminProfile"},
    Signin: { path: "/" },
    ForgotPassword: { path: "/forgot-password" },
    ResetPassword: { path: "/reset-password" },
    NotFound: { path: "/404" },
};