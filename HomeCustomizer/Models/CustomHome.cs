using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HomeCustomizer.Models
{
    public class CustomHome
    {
        public int ID { get; set; }
        public int ColorBoardId { get; set; }
        public string ImageUrl { get; set; }
        public string SidingColor { get; set; }
        public string ShutterColor { get; set; }
    }
}
