const Contactus = () => {
    return <div className="mx-auto w-4/12 rounded-lg">
        <h1 className="font-bold text-3xl p-4 m-4"> Contact us via whatsapp </h1>
        <form className="bg-green-200 mx-auto">
            <div className="flex justify-between">   
                <input className="rounded-lg p-2 m-2 border border-black" type="text" placeholder="name"/>
                <input className="rounded-lg border border-black p-2 m-2" type="text" placeholder="message"/>
            </div>
            <div className="flex justify-center">
                <button className="rounded-lg p-2 m-2 bg-gray-300 ">Submit</button>
            </div>
        </form>
        
    </div>
};

export default Contactus;