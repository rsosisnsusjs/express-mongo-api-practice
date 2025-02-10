exports.index = (req, res, next) => {
    //res.send('Hello User');
    res.status(200).json({
        data: {
            name: 'Junu',
            address: {
                province: 'Bangkok'
            }
        }
    });
  };