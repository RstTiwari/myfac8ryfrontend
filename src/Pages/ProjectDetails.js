import {React,useEffect,useState} from "react";
import "./Style.css";
import { useNavigate ,useParams} from "react-router-dom";
import { AxiosCall } from "../API/Axios";

const ProjectDetails = () => {
  let navigate = useNavigate();

  const [projectData, setProjectData] = useState({});
  const [images,setImages] = useState("")
  const [components, setComponent] = useState([]);

  const {projectId}= useParams()

  const getProductDetails = async () => {
    try {
      let data = await AxiosCall("post", "getSingleProject", {
        projectId: projectId,
      });
      console.log(data,"----")
      if (data.success === 0) {
        alert("some error pls try again");
        navigate("/");
      }
      setProjectData(data.data);
      setImages(data.data.images[0])
      setComponent(data.data.components)
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getProductDetails();
  }, []);
  
  return (
    <div className="page__border">
      <div>
        <div className="pageRow3">
          <div className="pageRow3__InnerDiv">
            <div className="pageRowPartA">
              <h1>{projectData.title}</h1>
              <img className="projectTitleImage" alt="img" src={images} />
              <p className="projectDescription">{projectData.description}</p>
              <div className="components">
                <h1>Components <br/></h1>
                {components.length > 0 ? (components.map((item)=>{
                  return (
                    <ol>
                      <h5>{item}</h5>
                    </ol>
                  );
                })):(<></>)}
              </div>
              <div>
                <p>
                  <h1>Price:{projectData.price}</h1>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
