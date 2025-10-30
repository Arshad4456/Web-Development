import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { handle } = await params
  const client = await clientPromise;
  const db = client.db("bittree")
  const collection= db.collection("links")

  const item= await collection.findOne({handle: handle})
  if(!item){
    return notFound()
  }

  const item2 =  {
  "_id": {
    "$oid": "68fd420d923b37e19110ae3e"
  },
  "links": [
    {
      "linktext": "Facebook",
      "link": "https://www.facebook.com/muhammad.arshid.165685/"
    },
    {
      "linktext": "Instagram",
      "link": "www.instagram.com"
    },
    {
      "linktext": "Youtube",
      "link": "www.youtube.com"
    }
  ],
  "handle": "Arshad",
  "pic": "https://scontent.fisb17-1.fna.fbcdn.net/v/t1.6435-1/163203670_2788727014790906_6801864979598910390_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=109&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHdcyg1X9nlku7r7yJsx9xMTy_oKIpT2GVPL-goilPYZe_ZNF-Hgkw8fnUMEmORwfDNednR3GyO0Vb82I3paqW1&_nc_ohc=Xy_Zn-KknM0Q7kNvwG9tigm&_nc_oc=Adm-T3G4mmK14kfvdM415UgNEkeJC7RSb4mrWob7BvDtlD4XX1TxomVAdSUREsdBQZy0HtOfDDvZsDMGoO2j43EM&_nc_zt=24&_nc_ht=scontent.fisb17-1.fna&_nc_gid=_oA4EOza_vkna-oTDM4nzw&oh=00_AfeCyD4qaZ7M-AHjW2ilNl2NAgN9-jhqZPvNfH_jYtq-dQ&oe=69259718"
}

  return <div className="flex justify-center items-start min-h-screen bg-purple-300">
   {item && <div className="photo flex flex-col justify-center items-center my-8">
        <img src={item.pic} alt="profile_picture" className="rounded-full w-34 h-34" />
        <span className="font-bold text-xl">@{handle}</span>
        <span className="desc w-80 text-center">{item.desc}</span>
        <div className="links">
            {item.links.map((item, index) =>{
                return<Link key={index} href={item.link}> <div  className="bg-purple-100 w-80 py-4 shadow-lg flex justify-center rounded-md my-3">
                    {item.linktext}
            </div></Link>
            })}
        </div>
        </div>
        }
  </div>
}