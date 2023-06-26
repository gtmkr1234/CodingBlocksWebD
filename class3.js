// `Hello ${a.name}`   // refers to a template.. Just use ${variable} for templating


let obj = {
    java:50,
    fulS:80,
    total: function(){
        console.log(this.java+this.fulS);
    },
}
obj.total();
