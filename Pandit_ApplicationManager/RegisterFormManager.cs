using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccessLayer;
using System.Data;
using System.Data.SqlClient;
using Pandit_ApplicationEntity;

namespace Pandit_ApplicationManager
{
    public class RegisterFormManager
    {
        public List<RegisterFormModel> FetchPanditDetails(int PanditID)
        {
            List<RegisterFormModel> listRegisterFormModel = new List<RegisterFormModel>();

            try
            {
                SqlParameter p1 = new SqlParameter("@PanditID", PanditID);
                SqlParameter flag = new SqlParameter("@flag", "1");
                DataTable dt = clsDataAccess.ExecuteDataTable(CommandType.StoredProcedure, "Sp_Fetch_Pandit_Details", flag, p1);
                if (dt != null && dt.Rows.Count > 0)
                {
                    for (int i = 0; i < dt.Rows.Count; i++)
                    {
                        RegisterFormModel registerformmodel = new RegisterFormModel();
                        registerformmodel.Fullname = dt.Rows[i]["FullName"].ToString();
                        registerformmodel.Gender = dt.Rows[i]["Gender"].ToString();
                        registerformmodel.DateofBirth = dt.Rows[i]["DOB"].ToString();
                        registerformmodel.EmailAddress = dt.Rows[i]["Email"].ToString();
                        registerformmodel.PhoneNumber = dt.Rows[i]["Mobile"].ToString();
                        registerformmodel.Address = dt.Rows[i]["Address"].ToString();
                        registerformmodel.City = dt.Rows[i]["City"].ToString();
                        registerformmodel.State = dt.Rows[i]["State"].ToString();
                        registerformmodel.Country = dt.Rows[i]["country"].ToString();
                        registerformmodel.Zip = dt.Rows[i]["Zip"].ToString();
                        registerformmodel.YearsOfExperience = dt.Rows[i]["Year_of_Experience"].ToString();
                        registerformmodel.Hindi = dt.Rows[i]["Hindi"].ToString();
                        registerformmodel.English = dt.Rows[i]["English"].ToString();
                        registerformmodel.Spanish = dt.Rows[i]["Spanish"].ToString();
                        registerformmodel.French = dt.Rows[i]["French"].ToString();
                        registerformmodel.German = dt.Rows[i]["German"].ToString();
                        registerformmodel.Bengali = dt.Rows[i]["Bengali"].ToString();
                        registerformmodel.urdu = dt.Rows[i]["urdu"].ToString();
                        registerformmodel.Tamil = dt.Rows[i]["Tamil"].ToString();
                        registerformmodel.PanditID = Convert.ToInt64(dt.Rows[i]["Id"].ToString());
                        listRegisterFormModel.Add(registerformmodel);
                    }

                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return listRegisterFormModel;


        }
    }
}
