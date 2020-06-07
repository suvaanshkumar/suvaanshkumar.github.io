var workdetailsinfosys="●	Provided L1 and L2 support by creating users groups and monitoring the permissions on Microsoft server 2008 and desktop.<br>●  Monitored reports through Big data Analysis processes .<br>●  Created the best visualizations on Tableau and publishing it through Tableau.<br>●  Worked for a UK based fuel/petroleum client<br>●  Monitored integration of transactional data in  SSIS,SLT Bods,BDM Informatica.<br>●  Created Usecase dashboards to visualize issues for reporting Daily margin reports.<br>●  Used Service Now as a ticketing tool"
var workdetailsuber="●	Managing and working on improving the process for the driver partners to get onboarded with uber and train them get the best rating .<br>●	Preparing the best platform to train the drivers for examples videos,presentations,mobile Applications.<br>●	Used Uber Bliss as a tool of ticketing"
var workdetailstetrahedron="●	Undertook project on“Ekarkhana database using mySql<br>●	Worked in the capacity of Database designer using Mysql<br>●	Designed database structure for Ekarkhaana<br>●	Ekarkhana is a product of Tetrahedron Manufacturing Services in which details of the factory and industrial workshops are gathered to provide services to people in the industry.<br>●	Practiced Digital marketing using OCTANE GO to send customized emails.<br>●	Awarded as “Best Intern of the month”"
var workdetailswalmart="Provided the best customer service to satisfy the customers and increase the sales"
var i = 0;
function move(x) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= x) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
function fill(x,divname){
    document.getElementById(divname).innerHTML=x;
   //document.getElementById(divname).onmouseout=clear(divname);
}
function clear(divname){
  document.getElementById(divname).innerHTML="";
}


//header external
$('.sd').click(function(){
	$('.hero, .content').addClass('scrolled');
});

$('.hero').mousewheel(function(e){
	if( e.deltaY < 0 ){
		$('.hero, .content').addClass('scrolled');
		return false;
	}
});
$(window).mousewheel(function(e){
	if( $('.hero.scrolled').length ){
		if( $(window).scrollTop() == 0 && e.deltaY > 0 ){
			$('.hero, .content').removeClass('scrolled');
		}
	}
});
