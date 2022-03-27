using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WMO.Infrastructure.Enums
{
    public enum DisciplineEnum
    {
        BusinessModeling = 1,
        Requirements = 2,
        AnalysisAndDesign = 4,
        Implementation = 8,
        Test = 16,
        Deployment = 32,
        ConfigurationAndChangeManagement = 128,
        ProjectManagement = 256,
        Environment = 512
    }
}
