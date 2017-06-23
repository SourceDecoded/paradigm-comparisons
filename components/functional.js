// functional
var getComponentsByType = (entity) => {
    return (type) => {
        return entity.components.filter((component) => {
            return component.type === type;
        });
    }
};

var entity = {
    components:[
        {
            type: "first-component"
        }, {
            type: "second-component"
        }
    ]
};


var myEntityComponentGetter = getComponentsByType(entity);

console.log(myEntityComponentGetter("first-component"));

// could also be written like this if you didn't want to do multiple type lookups on an entity:
//   console.log(getComponentsByType(entity)("first-component"));