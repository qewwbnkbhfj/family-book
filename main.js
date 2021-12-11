var images = ["255506_473362572687572_351161396_n.jpg","mummy.jpg","bro.jpg","sis.JPG"];
var names = ["Uttam Kumar Swarnkar","Neetu Kumar Swarnkar","Shivansh Kumar Swarnkar","Akshita Kumar Swarnkar"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
