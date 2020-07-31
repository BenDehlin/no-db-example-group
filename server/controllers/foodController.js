let food = [
    {
        id: 1,
        name: 'pizza'
    },
    {
        id: 2,
        name: "celery"
    }
]

module.exports = {
    getFood: (req, res) => {
        return res.status(200).send(food)
    },
    addFood: (req, res) => {
        //do whatever I have to do to add a food
        return res.status(200).send(food)
    },
    deleteFood: (req, res) => {
        console.log(req.params)
        const {id} = req.params
        food = food.filter((e) => e.id !== +id)
        // Alternate way to delete:
        // const index = food.findIndex((element) => {
        //     return element.id === +id
        // })
        // food.splice(index, 1)
        return res.status(200).send(food)
    },
    editFood: (req, res) => {
        // do whatever I have to do to edit a food
        const {id} = req.params
        const {name} = req.body
        const index = food.findIndex((element) => {
            return element.id === +id
        })
        food[index].name = name
        return res.status(200).send(food)
    }
}