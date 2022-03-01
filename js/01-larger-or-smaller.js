// APPLICATION 1
//  Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

var yearsStudy = prompt('How many years have you been studying?');
var courses = prompt('How many courses have you completed?');
if (yearsStudy < courses) {
    document.write('You have completed ' + courses + ' courses');
}  else if (yearsStudy > courses) {
    document.write('You have studied for ' + years + ' years.');
}
else if (yearsStudy = courses) {
    document.write('The number of years you studied are the same as the number of courses you have completed!');
}