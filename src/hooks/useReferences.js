import { useRef } from "react"

export const useReferences = () => {
    const homeRef = useRef(null);
    const stackRef = useRef(null);
    const projectsRef = useRef(null);

    return {homeRef, stackRef, projectsRef}
}