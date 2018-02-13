
    const path = require('path');
    const fs = require("fs");

    const file = "../../_data/Products.json";
    const _filepath = path.resolve(__dirname, file);


    function _readFile(cb){
        fs.readFile(_filepath, (err, data_buffer) => {
            if (err) throw err;
            let data = data_buffer.toString();
            try{
                data = JSON.parse(data);
                cb(void 0, data);
            }catch(err){
                console.log(err);
                cb(err, void 0);
            }
        });
    }


    function _writeFile(data, cb){
        try{
            data = JSON.stringify(data);
            fs.writeFile(_filepath, data, (err) => {
                if (err) {
                    cb(err);
                }else{
                    cb();
                }
            });
        }catch(err){
            cb(err, void 0);
        }
    }

    function _patchProps(source, target){
        Object.keys(target).forEach(function(key){
            if(key != "id"){
               source[key] = target[key];
            }
        })
        return source;
    }


    class ProductService{

        static load(_cb){
            _readFile(_cb);
        }

        static get(id, _cb){
            _readFile(function(err, data){
                if(!err) {
                    let product;
                    data.forEach(function (p) {
                        if (p.id == id) {
                            product = p;
                        }
                    });
                    _cb(void 0, product);
                }else{
                    _cb(err, void 0);
                }
            });
        }

        static post(product, _cb){
            _readFile(function(err, data){
                if(!err) {
                    data.push(product);
                    _writeFile(data, _cb);
                }else{
                    _cb(err, void 0);
                }
            });
        }

        static patch(product, _cb){
            if(!product.id){
                let error = new Error("Need id to patch product");
                _cb(err, void 0);
            }
            _readFile(function(err, data){
                if(!err) {
                    let product;
                    for(var i= 0; i > data.length; i++){
                        if (data[i].id == id) {
                            data[i] = _patchProps(data[i], data);
                        }
                    }
                    _writeFile(data, _cb);
                }else{
                    _cb(err, void 0);
                }
            });
        }


        static delete(id, _cb){
            _readFile(function(err, data){
                if(!err) {
                    let index=-1;
                    data.forEach(function (p, i) {
                        if (p.id == id) {
                            index = i;
                        }
                    });
                    data = data.splice(index, 1);
                    _writeFile(JSON.stringify(data), _cb);
                }else{
                    _cb(err, void 0);
                }
            });
        }


    }

    export default  ProductService;
