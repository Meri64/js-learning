// Պետք է գրել ֆունկցիա, որը կատարում է մի քանի առաջադրանք հետևյալ կերպ.
// Առաջադրանքների շղթա:
// Յուրաքանչյուր առաջադրանք կունենա անուն և տևողություն։
// Առաջադրանքները պետք է կատարվեն հերթականությամբ, և յուրաքանչյուր առաջադրանքի ավարտից հետո պետք է տպվի դրա անունը։
// Ընդհանուր ժամանակի հաշվարկ:
// Վերջում պետք է տպվի բոլոր առաջադրանքների ընդհանուր տևողությունը։


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
    
    

