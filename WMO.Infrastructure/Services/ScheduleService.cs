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

        public List<Models.Task> PrepareSchedule()
        {
            List<Models.Task> schedules = new List<Models.Task>();
            schedules.Add(new Models.Task() { Id = 5 });

            RUPReaderService.Read(Dictionary.CSV_PATH);
            return schedules;
        }
    }
}
