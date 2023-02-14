document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    date.setFullYear( date.getFullYear() - 18 );
    M.Sidenav.init(document.querySelectorAll('.sidenav'), {});
    M.FormSelect.init(document.querySelectorAll('select'), {});
    M.Datepicker.init(document.querySelectorAll('.datepicker'),{});// showClearBtn: true, format: 'dd/mm/yyyy', maxDate: new Date(date.getFullYear(), date.getMonth(), date.getDate())

    Array.prototype.forEach.call(document.getElementsByClassName("triggerRegistarMenu"), function(menu) {
        menu.addEventListener('click', e => {
            M.Sidenav.init(document.querySelector('#registarmenu'), {edge: "right"}).open();
        });
    });

    Array.prototype.forEach.call(document.getElementsByClassName("triggerListarMenu"), function(menu) {
        menu.addEventListener('click', e => {
            M.Sidenav.init(document.querySelector('#listarmenu'), {edge: "right"}).open();
        });
    });
    /*document.querySelector(".forwardarrow").addEventListener('click', e => {
       M.Sidenav.init(document.querySelector('#dashboardmenu'), {edge: "left"}).open();
    });*/
    M.Tabs.init(document.querySelector(".tabs"), {});

    M.Materialbox.init(document.querySelectorAll('.materialboxed'), {});
    M.Modal.init(document.querySelectorAll('.modal'), {preventScrolling: false,
            dismissible: false});

    /*
        Array.from(els).forEach((el) => {
            // Do stuff here
            console.log(el.tagName);
        });
    */

    //M.Dropdown.init(document.querySelectorAll('.dropdown-trigger'), {});
     document.getElementById("thisyear").innerText = new Date().getFullYear();
});