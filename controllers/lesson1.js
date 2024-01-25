const emilyRoute = (req, res) => {
    res.send("Sarah Annah Birch");
  };

const ChanteMooreRoute = (req, res) => {
    res.send("Chante Moore");
  };
    
const hannahRoute = ((req, res) => {
    res.send("William Birch");
    });

module.exports = {
    emilyRoute,
    hannahRoute,
    ChanteMooreRoute
}