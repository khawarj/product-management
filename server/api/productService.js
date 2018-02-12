
    const path = require('path');
    const fs = require("fs");

    const file = "../_data/Products.json";
    const _filepath = path.resolve(__dirname, file);


    function _readFile(cb){
        fs.readFile(_filepath, (err, data_buffer) => {
            if (err) throw err;
            let data = data_buffer.toString();
            try{
                data = JSON.parse(data);
            }catch(err){
                console.log(err);
                throw err;
            }
            cb(void 0, data);
        });
    }


    function _writeFile(data, cb){

    }


    class ProductService{

        static load(_cb){
            _readFile(_cb);
        }


    }

    export default  ProductService;
