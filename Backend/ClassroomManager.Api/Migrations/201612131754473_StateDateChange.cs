namespace ClassroomManager.Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class StateDateChange : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Teachers", "StartDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.Teachers", "StateDate");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Teachers", "StateDate", c => c.DateTime(nullable: false));
            DropColumn("dbo.Teachers", "StartDate");
        }
    }
}
