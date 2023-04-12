import { getApplyingNow } from "../utilities/fakedb";
const jobApplicationLoader = async () => {
    const loadJobs = await fetch('/jobs.json');
    const jobs = await loadJobs.json();
    const jobstore = getApplyingNow();
    const savedJobs = [];
    for (const id in jobstore) {
        const addedJobs = jobs.find(pd => pd.id === id);
        if (addedJobs) {
            const quantity = jobstore[id];
            addedJobs.quantity = quantity;
            savedJobs.push(addedJobs);
        }
    }
    return savedJobs;
}

export default jobApplicationLoader;