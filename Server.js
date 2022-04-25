const http =require('http') // connect http package to our js file or program
let requestCounter = 0
const server = http.createServer((request,response)=>{
    requestCounter++
    switch (request.url){
            case '/dialogs':
            response.write('dialogs')
            break;

            case '/messages':
            response.write('messages')
            break;
            case '/':
            response.write('Main')
            break;

        default : response.write('404 not found')


    }

    response.end()
})// created server
server.listen(3003)