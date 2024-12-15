// declare const html2pdf: any;

// const from = document.getElementById("resumeForm") as HTMLFormElement;
// const resumePg = document.getElementById("resumePage") as HTMLElement;
// const resumepic = document.getElementById("resumePic") as HTMLImageElement;
// const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
// const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
// const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
// const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
// const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
// const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
// const downloadPdfButton = document.getElementById("download-Pdf") as HTMLButtonElement;
// const backButton = document.getElementById("backButton") as HTMLButtonElement;
// const editButton = document.getElementById("editButton") as HTMLButtonElement;
// const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
// const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;


// from.addEventListener("submit", async(event:Event)=>{
//     event?.preventDefault();
    
// const name = (document.getElementById("name") as HTMLInputElement).value;
// const email = (document.getElementById("email") as HTMLInputElement).value;
// const phone = (document.getElementById("phone") as HTMLInputElement).value;
// const degree = (document.getElementById("degree") as HTMLInputElement).value;
// const education = (document.getElementById("education") as HTMLInputElement).value;
// const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
// const skills = (document.getElementById("skills") as HTMLInputElement).value;
// const picInput = document.getElementById("pic") as HTMLInputElement;

// const picfile = picInput.files?picInput.files[0] : null;
// let photoBase64 = ''; 

// if(picfile){
//     photoBase64 = await fileToBase64(picfile);

//     localStorage.setItem("resumePic", photoBase64)
//     resumepic.src = photoBase64;
// }
// resumeName.textContent= name;
// resumeEmail.textContent= `Email : ${email}`;
// resumePhone.textContent= `Phone : ${phone}`;
// resumeEducation.textContent= `${degree} from ${education}`;
// resumeWorkExperience.textContent= workExperience;
// resumeSkills.textContent= skills;

// document.querySelector(".container")?.classList.add("hidden");
// resumePg.classList.remove("hidden");

// const queryParams = new URLSearchParams({
//     name: name,
//     email: email,
//     phone: phone,
//     degree: degree,
//     education: education,
//     workExperience: workExperience,
//     skills: skills,
// });

// const url = `${window.location.origin}?${queryParams.toString()}`;
// shareLinkButton.addEventListener("click", () =>{
//     navigator.clipboard.writeText(url);
//     alert("The link has been copied to the clipboard");
// })
//     window.history.replaceState(null,'',`?${queryParams.toString()}`);
// });

// function fileToBase64(file:File): Promise<string> {
//     return new Promise((resolve, reject) => {
//          const reader = new FileReader();
 
//          reader.onloadend = () => resolve(reader.result as string);
//          reader.onerror = (error) => reject(error);
//          reader.readAsDataURL(file);
//      });
// }

// backButton.addEventListener("click", () => {
//     document.querySelector(".container")?.classList.remove("hidden");
//     resumePg.classList.add("hidden");

//     window.history.replaceState(null, '', '/');
// })
// editButton.addEventListener("click", () => {
//     updateFormFromResume();

//     document.querySelector(".container")?.classList.remove("hidden");
//     resumePg.classList.add("hidden");
// });

// function updateFormFromResume() {

//     const [degree,education] = resumeEducation.textContent?.split("from")|| [];
//     (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
//     (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email:' ,'') || '';
//     (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ','') || '';
//     (document.getElementById("degree") as HTMLInputElement).value = degree.trim() || '';
//     (document.getElementById("education") as HTMLInputElement).value = education.trim() || '';
//     (document.getElementById("workExperience") as HTMLInputElement).value = resumeWorkExperience.textContent || '';
//     (document.getElementById("skills") as HTMLInputElement).value = resumeSkills.textContent || '';
// }

// downloadPdfButton.addEventListener('click',()=>{
//     if(typeof html2pdf !== 'undefined'){
//         alert('html2pdf is not defined');
//         return;
//     }
//     const resumeOptions = {
//         margin: 1,
//         filename: 'Resume.pdf',
//         image: {type: 'jpeg', quality: 0.98},
//         html2canvas: {scale: 2, logging: true, dpi: 192, letterRendering: true},
//         jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
//     };
//     html2pdf!()
//         .set(resumeOptions)
//         .from(resumeContent)
//         .save()
//         .catch((error:Error)=>{
//             console.error('Error generating PDF',error);
//         });
// });

// window.addEventListener('DOMContentLoaded', () => {
//     const queryParams = new URLSearchParams(window.location.search);
//     const name = queryParams.get('name')||'';
//     const email = queryParams.get('email')||'';
//     const phone = queryParams.get('phone')||'';
//     const degree = queryParams.get('degree')||'';
//     const education = queryParams.get('education')||'';
//     const workExperience = queryParams.get('workExperience')||'';
//     const skills = queryParams.get('skills')||'';

//     if(name || email || phone || degree || education || workExperience || skills){
//       resumeName.textContent= name;
//       resumeEmail.textContent= `Email : ${email}`;
//       resumePhone.textContent= `Phone : ${phone}`;
//       resumeEducation.textContent= `${degree} from ${education}`;
//       resumeWorkExperience.textContent= workExperience;
//       resumeSkills.textContent= skills;
      
//       const savedpic = localStorage.getItem("resumePic");
//       if(savedpic){
//         resumepic.src = savedpic;
//       }
//       document.querySelector(".container")?.classList.add("hidden");
//       resumePg.classList.remove("hidden");
//     }
// });

//     resumepic.style.width = "160px";
//     resumepic.style.height = "200px";
//     resumepic.style.borderRadius = "15px";
//     resumepic.style.objectFit = "cover";
//     resumepic.style.display = "block";
//     resumepic.style.margin = "0 auto";
declare const html2pdf: any;

const from = document.getElementById("resumeForm") as HTMLFormElement;
const resumePg = document.getElementById("resumePage") as HTMLElement;
const resumepic = document.getElementById("resumePic") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const downloadPdfButton = document.getElementById("download-Pdf") as HTMLButtonElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;

from.addEventListener("submit", async (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLInputElement).value;
    const skills = (document.getElementById("skills") as HTMLInputElement).value;
    const picInput = document.getElementById("pic") as HTMLInputElement;

    const picfile = picInput.files ? picInput.files[0] : null;
    let photoBase64 = '';

    if (picfile) {
        photoBase64 = await fileToBase64(picfile);
        localStorage.setItem("resumePic", photoBase64);
        resumepic.src = photoBase64;
    }
    resumeName.textContent = name;
    resumeEmail.textContent = `Email : ${email}`;
    resumePhone.textContent = `Phone : ${phone}`;
    resumeEducation.textContent = `${degree} from ${education}`;
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;

    document.querySelector(".container")?.classList.add("hidden");
    resumePg.classList.remove("hidden");

    const queryParams = new URLSearchParams({
        name: name,
        email: email,
        phone: phone,
        degree: degree,
        education: education,
        workExperience: workExperience,
        skills: skills,
    });

    const url = `${window.location.origin}?${queryParams.toString()}`;
    shareLinkButton.addEventListener("click", () => {
        navigator.clipboard.writeText(url);
        alert("The link has been copied to the clipboard");
    });
    window.history.replaceState(null, '', `?${queryParams.toString()}`);
});

function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
    });
}

backButton.addEventListener("click", () => {
    document.querySelector(".container")?.classList.remove("hidden");
    resumePg.classList.add("hidden");

    window.history.replaceState(null, '', '/');
});

editButton.addEventListener("click", () => {
    updateFormFromResume();

    document.querySelector(".container")?.classList.remove("hidden");
    resumePg.classList.add("hidden");
});

function updateFormFromResume() {
    const [degree, education] = resumeEducation.textContent?.split("from") || [];
    (document.getElementById("name") as HTMLInputElement).value = resumeName.textContent || '';
    (document.getElementById("email") as HTMLInputElement).value = resumeEmail.textContent?.replace('Email:', '') || '';
    (document.getElementById("phone") as HTMLInputElement).value = resumePhone.textContent?.replace('Phone: ', '') || '';
    (document.getElementById("degree") as HTMLInputElement).value = degree.trim() || '';
    (document.getElementById("education") as HTMLInputElement).value = education.trim() || '';
    (document.getElementById("workExperience") as HTMLInputElement).value = resumeWorkExperience.textContent || '';
    (document.getElementById("skills") as HTMLInputElement).value = resumeSkills.textContent || '';
}

downloadPdfButton.addEventListener('click', () => {
    if (typeof html2pdf === 'undefined') {
        alert('html2pdf is not defined');
        return;
    }
    const resumeOptions = {
        margin: 1,
        filename: 'Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, logging: true, dpi: 192, letterRendering: true },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf()
        .set(resumeOptions)
        .from(resumeContent)
        .save()
        .catch((error: Error) => {
            console.error('Error generating PDF', error);
        });
});

window.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('name') || '';
    const email = queryParams.get('email') || '';
    const phone = queryParams.get('phone') || '';
    const degree = queryParams.get('degree') || '';
    const education = queryParams.get('education') || '';
    const workExperience = queryParams.get('workExperience') || '';
    const skills = queryParams.get('skills') || '';

    if (name || email || phone || degree || education || workExperience || skills) {
        resumeName.textContent = name;
        resumeEmail.textContent = `Email : ${email}`;
        resumePhone.textContent = `Phone : ${phone}`;
        resumeEducation.textContent = `${degree} from ${education}`;
        resumeWorkExperience.textContent = workExperience;
        resumeSkills.textContent = skills;

        const savedpic = localStorage.getItem("resumePic");
        if (savedpic) {
            resumepic.src = savedpic;
        }
        document.querySelector(".container")?.classList.add("hidden");
        resumePg.classList.remove("hidden");
    }
});

resumepic.style.width = "160px";
resumepic.style.height = "200px";
resumepic.style.borderRadius = "15px";
resumepic.style.objectFit = "cover";
resumepic.style.display = "block";
resumepic.style.margin = "0 auto";