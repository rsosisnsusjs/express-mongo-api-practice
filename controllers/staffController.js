const Staff = require('../models/staff');

exports.index = async (req, res, next) => {

    const staff = await Staff.find().sort({_id: -1});

    res.status(200).json({
        data: staff
    });
};

exports.show = async (req, res, next) => {
    const {id} = req.params;
    
    const staff = await Staff.findById(id);
    //const staff = await Staff.findOne({_id: id});

    res.status(200).json({
        data: staff
    });
};

exports.insert = async (req, res, next) => {

    const {name, salary} = req.body;

    // let staff = new Staff(req.body);
    let staff = new Staff({
        name: name,
        salary: salary
    })
    await staff.save();

    res.status(200).json({
        message: 'insert completed'
    });
};
