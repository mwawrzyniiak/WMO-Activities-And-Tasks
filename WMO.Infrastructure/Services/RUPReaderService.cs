using WMO.Infrastructure.Interfaces;
using WMO.Infrastructure.Models;

namespace WMO.Infrastructure.Services
{
    public class RUPReaderService : IRUPReaderService
    {
        private readonly string splitVar = ";";

        public List<RUP> Read(string path)
        {
            bool isFirst = true;
            List<RUP> list = new List<RUP>();

            using var reader = new StreamReader(path);

            while (!reader.EndOfStream)
            {
                string? line = reader.ReadLine();
                var values = line?.Split(splitVar);

                if (!isFirst)
                {
                    if (values?.Length > 0)
                        list.Add(new RUP(values));
                }
                isFirst = false;
            }

            return list;
        }
    }
}
