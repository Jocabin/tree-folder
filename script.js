const tree = [
    {
        parent: 'tree-view',
        name: "Fichier",
        childrens: [
            {
                parent: 'Fichier',
                name: "Exporter",
                childrens: [
                    {
                        parent: 'Exporter',
                        name: "pour Excel",
                    },
                    {
                        parent: 'Exporter',
                        name: "pour Google Doc",
                    }
                ]
            },
            {
                parent: 'Fichier',
                name: "Importer",
                childrens: [
                    {
                        parent: 'Importer',
                        name: "via PDF",
                    },
                    {
                        parent: 'Importer',
                        name: "via JPG",
                    }
                ]
            }
        ],
    },
    {
        parent: 'tree-view',
        name: "Options",
        childrens: [
            {
                parent: 'Options',
                name: "Option 1",
                childrens: [
                    {
                        parent: 'Option 1',
                        name: "Sous-option 1",
                    },
                    {
                        parent: 'Option 1',
                        name: "sous option 2",
                    }
                ]
            },
            {
                parent: 'Options',
                name: "Jeanpatrick",
                childrens: [
                    {
                        parent: 'Jeanpatrick',
                        name: "salade de pomme de terre",
                    },
                    {
                        parent: 'Jeanpatrick',
                        name: "bonjoir",
                    }
                ]
            }
        ],
    }
]

function create_item(node, parent) {
    console.log(parent)
    let li = document.createElement('li')
    li.innerText = node.name

    document.getElementById(node.parent).appendChild(li)
}

function create_parent(node, parent) {
    console.log(parent)
    let li = document.createElement('li')
    let ul_parent = document.createElement('ul')

    li.innerText = node.name
    ul_parent.setAttribute('id', node.name)

    li.appendChild(ul_parent)

    document.getElementById(node.parent).appendChild(li)
}

function create_tree(tree) {
    let parent = document.getElementById('tree-view')

    for (let node of tree) {
        if (!node.childrens) {
            create_item(node)
        } else {
            parent = node.parentElement
            create_parent(node)
            create_tree(node.childrens)
        }
    }
}

create_tree(tree)