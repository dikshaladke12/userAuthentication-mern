const config = {
    local:{
        DB:{
            DB_HOST:'localhost',
            DB_PORT:27017,
            DB_NAME:"UserApplication"
        },
        API_PORT: 4340
    },
    production :{
        DB : {
            HOST:'',
            DB_PORT:27017,
            DB_NAME:"UserApplication"
        },
        API_PORT: 4340
    },
    testing : {
        DB:{
            HOST:'',
            DB_PORT:27017,
            DB_NAME:"UserApplication"
        },
        API_PORT: 4340
    }
}

export default config;