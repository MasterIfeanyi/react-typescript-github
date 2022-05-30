import {useState} from 'react'
import {DataType} from "../types/Data"

type FormProps = {
    setData:  React.Dispatch<React.SetStateAction<DataType>>
}

const Form = ({setData}: FormProps) => {

    const [username, setUsername] = useState<string>("")

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(username === "" ) return
        try {
            const response = await fetch(`https://api.github.com/users/${username}`)

            const data = await response.json();

            console.log(data);

            // save response to state
            setData(data);

            //clear out login details field
            setUsername("")

        } catch (error) {
            const err = error as Error
            console.log(err.message)
        }

    }




  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center">
                <h1 className="h3">Profile Finder for GitHub</h1>
                <p>Check out the repos, followers and more, just by entering a username</p>
            </div>
        </div>


        <div className="row d-flex justify-content-center">
            <div className="col-md-6 my-3">
                <form action="" className="row" onSubmit={handleSubmit}>
                    <div className="form-group col-12 mb-3">
                        <label className="form-label h5">Username</label>
                        <input
                            required
                            type="text"
                            className="form-control search-bar"
                            placeholder="Enter GitHub username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary form-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form