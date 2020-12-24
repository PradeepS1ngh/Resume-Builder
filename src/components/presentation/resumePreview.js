import React from 'react';
import { Link } from 'react-router-dom';
import {fieldCd} from '../../constants/typeCodes'


class ResumePreview extends React.PureComponent{

    
    render() {    
        
        var  {contactSection, educationSection ,fontColor , document } = this.props;
        var name = contactSection[fieldCd.FirstName] + ' ' + contactSection[fieldCd.LastName];
        var f = contactSection[fieldCd.FirstName].charAt(0);
        var s = contactSection[fieldCd.LastName].charAt(0);

        
        if (fontColor == undefined || fontColor == "") { 
            switch (document.skinCd) {
                case "skin1":
                    fontColor = "rgb(0, 163, 228)"
                    break;
                case "skin2":
                    fontColor = "orange"
                    break;
            
                default:
                    fontColor = "red"
                    break;
            }
        }
        
        return (
        <>
            {document.skinCd == "skin2"   ? 
            
            
              //   skin2 
            <div className={"resume-preview2 "}>
                <div className={'name-section'}>
                    <div className="name-col-1" style={{ backgroundColor : fontColor }}><h2>{f}{s}</h2></div>
                    <div className="name-col-2">
                        <h2>{ name }</h2>
                        <p className={'center address'}>{(contactSection[fieldCd.Street] != '' ? contactSection[fieldCd.Street] + ', ' : '') +
                        (contactSection[fieldCd.City] != '' ? contactSection[fieldCd.City] + ', ' : '') +
                        (contactSection[fieldCd.State] != '' ? contactSection[fieldCd.State] + ', ' : '') +
                        (contactSection[fieldCd.Country] != '' ? contactSection[fieldCd.Country] + ', ' : '') +
                        (contactSection[fieldCd.ZipCode] != '' ? contactSection[fieldCd.ZipCode] + ', ' : '')}</p>
                        <p className={'center'}>{(contactSection[fieldCd.Email] != '' ? contactSection[fieldCd.Email] + ', ' : '') + 
                        (contactSection[fieldCd.Phone] != '' ? contactSection[fieldCd.Phone] + ', ' : '')}</p>
                    </div>  
                    <div className="edit" style={{color:"Balck"}}>
                     <Link to='/contact'>EDIT</Link>         
                    </div>   
                </div>
                
                <div className={'divider'} style={{ borderColor: fontColor }}></div>
                <div className={'part-section'}>
                    <div className="heading bold" style={{ color: fontColor }}><h4>PROFESSIONAL SUMMARY</h4></div>
                    <div className="body"><p> {contactSection[fieldCd.ProfSummary]}</p></div>
                </div>

                <div className={'divider'} style={{ borderColor: fontColor }}></div>
                <div className={'part-section'}>
                    <div className="heading bold" style={{ color: fontColor }}><h4>EDUCATION</h4></div>
                    <div className="body">
                                <p>{educationSection[fieldCd.SchoolName]}</p>
                                <p style={{wordSpacing: "10rem"}}> {educationSection[fieldCd.Degree] + " " }
                                                         {educationSection[fieldCd.GraduationCGPA] + " "}
                                    {educationSection[fieldCd.City]}</p>
                                <p style={{ wordSpacing: "8rem" }}> Duration {educationSection[fieldCd.GraduationDate]}-
                                {educationSection[fieldCd.GraduationYear]}</p>
                    </div>
                </div>

                <div className={'divider'} style={{ borderColor: fontColor }}></div> 
            </div>

                    
            :
                
                    //  skin1
                    <div className={"resume-preview "}>
            
                        <div className={'name-section'}>
                            <p className={'center contact-name text-upper'} style={{ color: fontColor }}> {name} </p>
                            <p className={'center address'}>{(contactSection[fieldCd.Street] != '' ? contactSection[fieldCd.Street] + ', ' : '') +
                                (contactSection[fieldCd.City] != '' ? contactSection[fieldCd.City] + ', ' : '') +
                                (contactSection[fieldCd.State] != '' ? contactSection[fieldCd.State] + ', ' : '') +
                                (contactSection[fieldCd.Country] != '' ? contactSection[fieldCd.Country] + ', ' : '') +
                                (contactSection[fieldCd.ZipCode] != '' ? contactSection[fieldCd.ZipCode] + ', ' : '')}</p>
                            <p className={'center'}>{(contactSection[fieldCd.Email] != '' ? contactSection[fieldCd.Email] + ', ' : '')}</p>
                            <p className={'center'}>{(contactSection[fieldCd.Phone] != '' ? contactSection[fieldCd.Phone] + ', ' : '')}</p>
                        </div>
                        <div className={'educationSection text-upper'}>

                            <p className="heading bold" style={{ color: fontColor }}>PROFESSIONAL SUMMARY</p>
                            <div className={'divider'} style={{ borderColor: fontColor }}></div>
                            <p> {contactSection[fieldCd.ProfSummary]}</p>
                        </div>
                        <div className={'educationSection text-upper'}>

                            <p className="heading bold" style={{ color: fontColor }}>EDUCATIONAL DETAILS</p>
                            <div className={'divider'} style={{ borderColor: fontColor }}></div>
                            <p> {educationSection[fieldCd.SchoolName]}</p>
                            <p style={{ wordSpacing: "10rem" }}> {educationSection[fieldCd.Degree] + " "}
                                {educationSection[fieldCd.GraduationCGPA] + " "}
                                {educationSection[fieldCd.City]}</p>
                            <p style={{ wordSpacing: "8rem" }}> Duration {educationSection[fieldCd.GraduationDate]}-
                                {educationSection[fieldCd.GraduationYear]}</p>
                        </div>

                    </div>
            
                    
            }
            
        </>
        )
    }
}
 
export default ResumePreview;







           