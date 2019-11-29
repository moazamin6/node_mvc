const my_controller = {
   check: function (req, res) {
      res.render('test');
   },

   getName: (req, res) => {
      res.send('my name is moaz');
   }
};

module.exports = my_controller;
