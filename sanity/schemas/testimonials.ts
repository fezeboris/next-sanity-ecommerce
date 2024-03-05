export default {
    name:'testimonials',
    type:'document',
    title:'Testimonials',
    fields:[
        {
            name:'name',
            type:'string',
            title:'Author of comment'
        },
        {
            name:'author_image',
            type:'image',
            title:'Author Image',
        },
        {
            name:'comment',
            type:'text',
            title:'Comment'
        },
      
    ]
}