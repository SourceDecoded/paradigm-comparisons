// Procedural

function getComponentsByType(entity, type) {
    var matches = [];
    for (var i in entity.components) {
        if (entity.components[i].type === type) {
            matches.push(entity.components[i]);
        }
    }
    return matches;
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

console.log(getComponentsByType(entity, "first-component"));