const router = require('express').Router();
let Recipe = require('../models/recipemodel');

router.get('/', (req, res) => {
    Recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.post('/add', (req, res) => {
    const recipeName = req.body.recipeName;
    const description = req.body.description;

    const newRecipe = new Recipe({
        recipeName,
        description
    });

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.get('/:id', (req, res) => {
    Recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.delete('/:id', (req, res) => {
    Recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

/*router.put('/:id', (req,res) => {
    Recipe.findById(req.params.id)
        .then(recipe => {
            recipe.recipeName = req.body.recipeName ? req.body.recipeName : recipe.recipeName;
            recipe.description = req.body.description ? req.body.description : recipe.description;

            recipe.save()
                .then(() => res.json('Recipe Updated!'))
                .catch(err => res.status(400).json("Error: " + err));
        })
        .catch(err => res.status(400).json("Error: " + err));
});
*/

router.put('/:recipeName', (req, res) => {
    var name = req.params.recipeName;
    Recipe.findOne({recipeName: name}, (err, found) => {
        if(err){
            res.status(400).json("Error: " + err);
        } else {
            if(!found){
                res.status(400).json("Recipe not found")
            } else {
                found.recipeName = req.params.recipeName ? req.params.recipeName : found.recipeName;
                found.description = req.params.description ? req.params.description : found.description;
            }
        }
    });
});

module.exports = router;