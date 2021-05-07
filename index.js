 app
 
 
    .all('/req/', (req, res) => {
        const addr = req.method === 'POST' ? req.body.addr : req.query.addr;

        http.get(addr, (r, b = '') => {
            r
            .on('data', d => b += d)
            .on('end', () => res.send(b));
        });
    })
 

    })
    .get('/login/', (req, res) => res.send(LOGIN || 'goss'))  
    .get('/sha1/:input', r => {
        const shasum = crypto.createHash('sha1');
        shasum.update(r.params.input);
        r.res.send(shasum.digest('hex')); 
    })
       
  
    .get('/code/', (req, res) => {
        res.set({ 'Content-Type': 'text/plain; charset=utf-8' });
        createReadStream(path).pipe(res);
    })
    
  
 
   
   
   
    return app;
}
