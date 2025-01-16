const tasks = [
    { taskName: "Առաջադրանք 1", duration: 1000 },
    { taskName: "Առաջադրանք 2", duration: 2000 },
    { taskName: "Առաջադրանք 3", duration: 1500 },
  ];
  
  async function runTaskWithTotalTime(tasks){
  let totalTime=0;
  for (const task of tasks ){
       console.log(task.taskName);
       totalTime += task.duration;
       await new Promise((resolve)=>
        setTimeout(resolve,task.duration)
  )}
       return totalTime;
  
  }
runTaskWithTotalTime(tasks).then(totalTime => {
    console.log(`Ընդհանուր տևողությունը՝ ${totalTime} միլիվայրկյան։`);
  }).catch(error => {
    console.error("Սխալ տեղի ունեցավ:", error);
  });
    
    

