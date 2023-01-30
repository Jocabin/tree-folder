const tree = [
    {
        parent: 'tree-view',
        name: "Fichier",
        childrens: [
            {
                name: "Exporter",
                childrens: [
                    {
                        name: "pour Excel",
                    },
                    {
                        name: "pour Google Doc",
                    }
                ]
            },
            {
                name: "Importer",
                childrens: [
                    {
                        name: "via PDF",
                    },
                    {
                        name: "via JPG",
                    }
                ]
            }
        ],
    },
    {
        name: "Options",
        childrens: [
            {
                name: "Option 1",
                childrens: [
                    {
                        name: "Sous-option 1",
                    },
                    {
                        name: "sous option 2",
                    }
                ]
            },
            {
                name: "Jeanpatrick",
                childrens: [
                    {
                        name: "salade de pomme de terre",
                    },
                    {
                        name: "bonjoir",
                    }
                ]
            }
        ],
    }
]

function create_item(node, parent_id) {
    let parent_li = document.createElement('li')
    parent_li.innerText = node.name
    document.getElementById(parent_id).appendChild(parent_li)

    if (node.childrens) {
        let parent_ul = document.createElement('ul')

        parent_ul.setAttribute('id', node.name)
        parent_li.appendChild(parent_ul)

        create_tree(node.childrens, node.name)
    }
}

function create_tree(tree, parent_id) {
    for (let node of tree) {
        create_item(node, parent_id)
    }
}

create_tree(tree, 'tree-view')