using WMO.Infrastructure.Interfaces;
using WMO.Infrastructure.Models;

namespace WMO.Infrastructure.Services
{
    public class ScheduleService : IScheduleService
    {
        public readonly IRUPReaderService RUPReaderService;

        public ScheduleService(IRUPReaderService RUPReaderService)
        {
            this.RUPReaderService = RUPReaderService;
        }

        public List<Models.Task> PrepareSchedule(ProjectParameters projectParameters)
        {
            List<Models.Task> schedules = new List<Models.Task>();

            var rups = RUPReaderService.Read(Dictionary.CSV_PATH);

            foreach (var rup in rups)
            {
                if (projectParameters.ProjectSize != CategoryEnum.Sun)
                    if (!(projectParameters.Disciplines.HasFlag(rup.Dyscyplina)) || rup.Kategorie.HasFlag(projectParameters.ProjectSize))//this HasFlag is shit method I hate it it does thing but why the fuck we needed to use this shit instead of something more understandable
                    {
                        continue;
                    }
                schedules.Add(new Models.Task()
                {
                    Id = rup.Index,
                    Duration = 1,
                    Name = rup.BreakdownElement,
                    Predecessors = rup.Predecessors,
                    Role = "",
                    Description = rup.Uzasadnienie,
                    Discipline = rup.Dyscyplina.ToString(),
                    Phase = rup.Phase.ToString()
                }); ;
            }
            return schedules;
        }
    }
}
