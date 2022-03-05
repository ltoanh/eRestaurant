import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import PATHS from "routes/path";

function useSearchQuery(params) {
  const navigate = useNavigate();

  const filterParams = () => {
    params = Object.keys(params).filter(item => item !== "");
  }

  useEffect(() => {
    navigate({
      pathname: PATHS.SEARCH,
      search: new URLSearchParams(filterParams(params)).toString(),
    })
  }, [params])
  
}

export default useSearchQuery