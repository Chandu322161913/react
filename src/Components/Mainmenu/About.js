//about.js module 
import React from 'react'

//image
import Tree from './../../Assets/images/tree_1.jpg'
import Trees from './../../Assets/images/tree_2.jpg'



//create about component

function About() {
    return (<div>
        <h2 className="text-center text-primary">About component</h2>

        <div className="d-grid gap-3">
      <div className="p-2 bg-light border">  Heres our simple definition: A tree is a tall plant that can live for a very long time. It has a single
            stem or trunk and branches that support leaves. Beneath the ground,a tree has a root system that acts as
            an anchor and stores the water and nutrients the plant needs to grow.</div>
      <div className="p-2 bg-light border">  A tree is a nonlinear hierarchical data structure that consists of nodes connected by edges. In this tutorial,
            you will learn about different types of trees ...</div>
      <div className="p-2 bg-light border"> In computer science, a tree is a widely used abstract data type that represents a hierarchical tree structure with a
            set of connected nodes. Each node in the tree can be connected to many children (depending on the type of tree),
            but must be connected to exactly one parent, except for the root node, which has no parent. These constraints mean
            there are no cycles or "loops" (no node can be its own ancestor), and also that each child can be treated like the
            root node of its own subtree, making recursion a useful technique for tree traversal. In contrast to linear
            data structures, many trees cannot be represented by relationships between neighboring nodes in a single straight line.</div>
    </div>
        <img src={Tree} className="w-50 ma-auto" alt="Trees goes to wildely" />

        <img src={Trees} className="w-50 ma-auto" alt="Trees goes to wildely" />

    </div >)
}
export default About;