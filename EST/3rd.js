import React,{useState} from 'react';
function UserForm(){
    const[FormData,SetFormData]=UseState({name:'',email:''});
    const[submittedData,SetsubmittedData]=UseState(null);
    const handleChange=(e)=>{
        SetFormData({
            ...FormData,
            [e.target.name]:e.target.value
        });
    };
     const handleSubmit=(e)=>{
        e.PreventDefault();
        SetsubmittedData(FormData);
        };
    return(
        <div>
            <h2>User Form</h2>
            <form onSubmit = {handleSubmit}>
                <input 
                    type='text'
                    name='name'
                    placeholder="enter name"
                    value={FormData.name}
                    onChange={handleChange}
                />
                <br/><br/>
                <input 
                    type='email'
                    name='email'
                    placeholder="enter email"
                    value={FormData.email}
                    onChange={handleChange}
                />
                <br/><br/>
                <button type="Submit">Submit</button>
            </form>
            {submittedData && (
                <div>
                    <h3>Submitted Data:</h3>
                    <p> Name:{submittedData.name}</p>
                    <p> Email:{submittedData.email}</p>
                </div>
            )};
        </div>
    );
}
export default UserForm;
