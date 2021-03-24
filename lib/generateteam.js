
module.exports= {
    //renders html if manager exists
     getManager: function (data) {
         if (data === 0) {
             return;
         }
         else {
             for(var i= 0; i < data.length; i++) {
                 let html2 = 
                 `<div class="employee col-12 col-lg-4">
                 <div class="card-body">
                 <h3 class="name">${data[i].name}</h3>
                 <h4 class="role">${data[i].role}</h4>
                 </div>
                 <ul class="info" style="list-style-type: none;">
                 <li><a href="mailto: ${data[i].email}"><i class="fas fa-envelope">  ${data[i].email}</i></a></li>
                 <li>${data[i].id}</li>
                 <li>${data[i].officeNumber}</li>
                 </ul>
                 </div>`
                 return html2;
             }
         }

    },

    //renders html if engineer exists
    getEngineer: function(data) {
            if (data === 0) {
                return;
            }
            else {

                for (var i=0; i< data.length; i++) {
                    let html3 =
                    `<div class="employee col-12 col-lg-4">
                    <div class="card-body">
                    <h3 class="name">${data[i].name}</h3>
                    <h4 class="role">${data[i].role}</h4>
                    </div>
                    <ul class="info" style="list-style-type: none;">
                    <li><a href="mailto: ${data[i].email}"><i class="fas fa-envelope">  ${data[i].email}</i></a></li>
                    <li>${data[i].id}</li>
                    <li><a href ="https://github.com/${data[i].github}">Github: github.com/${data[i].github}</a></li>
                    </ul>
                    </div>`
                   return html3
                }
            }
    },

    //renders html if intern exists
 getIntern: function(data) {
    if (data.length === 0) {
        return;
    }
    else {
        for(var i=0; i< data.length; i++) {
            let html4 =
            `<div class="employee col-12 col-lg-4">
            <div class="card-body">
            <h3 class="name">${data[i].name}</h3>
            <h4 class="role">${data[i].role}</h4>
            </div>
            <ul class="info" style="list-style-type: none;">
            <li><a href="mailto: ${data[i].email}"><i class="fas fa-envelope">  ${data[i].email}</i></a></li>
            <li>${data[i].id}</li>
            <li>${data[i].school}</li>
            </ul>
            </div>`
            return html4
        }
    }
}
}


