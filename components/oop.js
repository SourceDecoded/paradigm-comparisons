// OOP
class EntityUtility {
    constructor(entity) {
        this.components = [];
        this.entity = entity;
    }

    getComponentsByType(type) {
        return this.entity.components.filter((component) => {
            return component.type === type;
        });
    }
}

var entityUtility = new EntityUtility({
    components:[
        {
            type: "first-component"
        }, {
            type: "second-component"
        }
    ]
});

console.log(entityUtility.getComponentsByType("first-component"));