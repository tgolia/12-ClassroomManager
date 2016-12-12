using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClassroomManager.Api.Models
{
    public class Teacher : Person
    {
        public int TeacherId { get; set; }
        public DateTime StateDate { get; set; }
        public DateTime? EndDate { get; set; }

        // Navigation Properties
        public virtual ICollection<Class> Classes { get; set; }
    }
}