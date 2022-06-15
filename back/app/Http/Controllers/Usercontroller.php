<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Support\Facades\Validator;
use Illuminate\Contracts\Pipeline\Hub;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use PhpParser\Parser\Tokens;
use Symfony\Component\Console\Input\Input;

class Usercontroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    $user = User::all();
response()->json($user);

return $user;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(request $request )
    {

        $user = new User();
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();
        return response()->json([
            "user" => $request->all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
       $validator = Validator::make($request->all(), [
'email'=>'required|max:191',
'password'=>'required',
       ]);
       if ($validator->fails()) {
    return response()->json([
    ]);
       }else{
   $user = User::where('email',$request->email)->first();
if(! $user || ! Hash::check($request->password,$user->password)){
return response()->json([
'status'=>401,
'message'=>"informations d'identification incorrectes",
]);
}else{
   $token = $user->createToken($user->email.'_Token')->plainTextToken;
    return response()->json([
    'status'=>200,
    'token'=>$token,
    'username'=>$user->name,
    'role'=>$user->role,
    'message'=>"succes",
    ]);
}
    }
}



    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function logout()
    {


auth()->user()->tokens->each(function($token,$key){
    $token->delete();
});
 response()->json([

    'status'=>200,
    'message'=>'déconnexion réussie',

]);



    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
