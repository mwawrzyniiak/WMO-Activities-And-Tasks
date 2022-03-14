using System.Windows;
using WMO_Activities_And_Tasks.Models;
using WMO_Activities_And_Tasks.Services;

namespace WMO_Activities_And_Tasks
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        private RUPReaderService readerService;

        public MainWindow()
        {
            InitializeComponent();
            readerService = new RUPReaderService();

            var test = readerService.Read(Dictionary.CSV_PATH);
        }
    }
}
