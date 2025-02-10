exports.index = (req, res, next) => {
    //res.send('Hello User');
    res.status(200).json({message: 'Hello User'});
  };

exports.login = (req, res, next) => {
    //res.send('Hello User');
    res.status(200).json({message: 'Hello Login'});
  };