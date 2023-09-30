import {React,useEffect,useState} from "react";
import "./Style.css";
import { useNavigate ,useParams} from "react-router-dom";
import { AxiosCall } from "../API/Axios";

const ProjectDetails = () => {
  let navigate = useNavigate();

  const [projectData, setProjectData] = useState({});
  const [images,setImages] = useState("")
  const [components, setComponent] = useState([]);
  const [advantages,setAdvantage]   = useState([])
 
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
      setAdvantage(data.data.advantages)
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
              <h1 className="projectLink">{projectData.title && projectData.title.toUpperCase()}</h1>
              <img className="projectTitleImage" alt="img" src={images} />
              <div className="components">
              <p className="projectDescription">
                <h5 >
                {projectData.description}
                </h5>
                </p>
              <div className="twoDiv">
                <div className="divLeft">
                <h2 className="projectLink">COMPONENTS <br/></h2>
                {components.length > 0 ? (components.map((item)=>{
                  return (
                    <ol className="projectList">
                      <h4>{item}</h4>
                    </ol>
                  );
                })):(<></>)}

                </div>
                <div className="divRight">
                <h2 className="projectLink">ADVANTAGES <br/></h2>
                {advantages.length > 0 ? (advantages.map((item)=>{
                  return (
                    <ol className="projectList">
                      <h4>{item}</h4>
                    </ol>
                  );
                })):(<></>)}

                </div>
              </div>
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
