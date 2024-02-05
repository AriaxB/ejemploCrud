<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function users(){
        $users=User::all();
        return $users;
    }
    public function showUser($id){
        $user=User::find($id);
        return $user;
    }
    public function register(Request $req){
        $user=new User();
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=$req->password;
        $user->address=$req->address;
        $user->state=$req->state;

        $user->save();

        return true;
    }

    public function updateUser(Request $req, $id){
        $user=User::findOrFail($id);
        $user->name=$req->input('name');
        $user->email=$req->input('email');
        $user->password=$req->input('password');
        $user->address=$req->input('address');
        $user->state=$req->input('state');

        $user->save();

        return true;
    }
    public function login(Request $req){
        $req->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);
    
        $credentials = $req->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            setcookie('usuario', $user->id, time() + (10 * 24 * 60 * 60));
            return true;
        } else {
            return redirect()->back()->withErrors(['login' => 'Credenciales incorrectas']);
        }
        
    }
    public function deleteUser($id){
        $user=User::destroy($id);
        return true;
    }
}
