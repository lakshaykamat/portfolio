export type ProjectCardType = {
    id:number
    title:String
    isCompleted:boolean
    description:String
    tags:Array<String>
    techStack:Array<String>
    githubLink:String,
    demoLink:String
}

export type BlogPost = {
    id: string,
    title: string,
    date: string,
    description:string
    coverImage:string
}