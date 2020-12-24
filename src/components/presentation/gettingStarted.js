import React from 'react';
import { skinCodes } from '../../constants/typeCodes';

import { Redirect } from 'react-router-dom'





class GettingStarted extends React.Component{
    constructor(props, context) {
        super(props,context);
         this.state = {
             document: this.props.document,
             firebaseauth: this.props.fireBaseAuth ,
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ document: nextProps.document, firebaseauth: nextProps.fireBaseAuth, });
    }

    onChange = (value) => {
        // this.props.documentActionsBind.checkthunk();

        // already have a document then update  else  add
        if (this.state.document && this.state.document.id) { 
            this.props.documentActionsBind.updateDocument(this.state.document.id, value);
        } else {
            this.props.documentActionsBind.addDocument(value);
        }    
        this.props.history.push('contact');
    }
    render() {

        // if (this.state.firebaseauth.uid === undefined) {
        //     console.log(this.state.firebaseauth.uid);
        //     return <Redirect to="/login" />
        // }

        return (
            
            (this.state.firebaseauth.uid === undefined)
                ? <> {alert("You Are Not a Authorised User Login First")} < Redirect to = "/login" /></>
                :
                <div className="container med gettingStarted">
                <div className="section">
                    <h1 className=" center" style={{fontSize: "45px" , textShadow: "-2px 2px 2px white"}}>
                    Select a resume template to get started</h1>
                    <p className=" center">
                    You’ll be able to edit and change this template later!
                    </p>
                    <div className="styleTemplate ">
                    {
                        skinCodes.map((value,index) => {
                            return (
                                <div key={index} className={(value == this.state.document.skinCd ? "selected-skin " : "") + "template-card rounded-border"}>
                                    <img  className='' src={'/images/' + value + '.svg'}/>
                                    <button type="button" onClick={()=>this.onChange(value)}  
                                    className='btn-select-theme'>{(value == this.state.document.skinCd ? "SELECTED" : "USE TEMPLATE")}</button>
                                </div>
                            );
                        })
                    }
                    </div>
                
                </div>
                </div>
        );
    }
}


export default GettingStarted;














// const mapStateToProps = (state) => {
//     return {
//         document : state.documentSection
//     }
// }

// const mapDispatchToProps = (dispatch) => { 
//     return {
//         documentActionsBind:bindActionCreators(documentActions,dispatch),
//     }
// }



// export default connect(mapStateToProps,mapDispatchToProps)(GettingStarted);
 

// const mapStateToProps=(state, ownProps)=>{
//     return state;
// }

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         addSkin :(skinCd) => {            
//             dispatch({ type: 'ADD_SKINCD',skinCd})        
//         }
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted)

