/* eslint-disable */
/**
 * This file was automatically generated by @algorandfoundation/algokit-client-generator.
 * DO NOT MODIFY IT BY HAND.
 * requires: @algorandfoundation/algokit-utils: ^2
 */
import * as algokit from '@algorandfoundation/algokit-utils'
import type {
  ABIAppCallArg,
  AppCallTransactionResult,
  AppCallTransactionResultOfType,
  AppCompilationResult,
  AppReference,
  AppState,
  CoreAppCallArgs,
  RawAppCallArgs,
  TealTemplateParams,
} from '@algorandfoundation/algokit-utils/types/app'
import type {
  AppClientCallCoreParams,
  AppClientCompilationParams,
  AppClientDeployCoreParams,
  AppDetails,
  ApplicationClient,
} from '@algorandfoundation/algokit-utils/types/app-client'
import type { AppSpec } from '@algorandfoundation/algokit-utils/types/app-spec'
import type { SendTransactionResult, TransactionToSign, SendTransactionFrom, SendTransactionParams } from '@algorandfoundation/algokit-utils/types/transaction'
import type { ABIResult, TransactionWithSigner } from 'algosdk'
import { Algodv2, OnApplicationComplete, Transaction, AtomicTransactionComposer, modelsv2 } from 'algosdk'
export const APP_SPEC: AppSpec = {
  "hints": {
    "createApplication(uint64)void": {
      "call_config": {
        "no_op": "CREATE"
      }
    },
    "addAccolade(uint64)void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "claimAccolade()void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "retrieveAccolade()void": {
      "call_config": {
        "no_op": "CALL"
      }
    },
    "deleteApplication()void": {
      "call_config": {
        "delete_application": "CALL"
      }
    }
  },
  "bare_call_config": {
    "no_op": "NEVER",
    "opt_in": "NEVER",
    "close_out": "NEVER",
    "update_application": "NEVER",
    "delete_application": "NEVER"
  },
  "schema": {
    "local": {
      "declared": {},
      "reserved": {}
    },
    "global": {
      "declared": {
        "accoladeId": {
          "type": "uint64",
          "key": "accoladeId"
        },
        "adminAddress": {
          "type": "bytes",
          "key": "adminAddress"
        }
      },
      "reserved": {}
    }
  },
  "state": {
    "global": {
      "num_byte_slices": 1,
      "num_uints": 1
    },
    "local": {
      "num_byte_slices": 0,
      "num_uints": 0
    }
  },
  "source": {
    "approval": "I3ByYWdtYSB2ZXJzaW9uIDkKCi8vIFRoaXMgVEVBTCB3YXMgZ2VuZXJhdGVkIGJ5IFRFQUxTY3JpcHQgdjAuMTAyLjAKLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsZ29yYW5kZm91bmRhdGlvbi9URUFMU2NyaXB0CgovLyBUaGlzIGNvbnRyYWN0IGlzIGNvbXBsaWFudCB3aXRoIGFuZC9vciBpbXBsZW1lbnRzIHRoZSBmb2xsb3dpbmcgQVJDczogWyBBUkM0IF0KCi8vIFRoZSBmb2xsb3dpbmcgdGVuIGxpbmVzIG9mIFRFQUwgaGFuZGxlIGluaXRpYWwgcHJvZ3JhbSBmbG93Ci8vIFRoaXMgcGF0dGVybiBpcyB1c2VkIHRvIG1ha2UgaXQgZWFzeSBmb3IgYW55b25lIHRvIHBhcnNlIHRoZSBzdGFydCBvZiB0aGUgcHJvZ3JhbSBhbmQgZGV0ZXJtaW5lIGlmIGEgc3BlY2lmaWMgYWN0aW9uIGlzIGFsbG93ZWQKLy8gSGVyZSwgYWN0aW9uIHJlZmVycyB0byB0aGUgT25Db21wbGV0ZSBpbiBjb21iaW5hdGlvbiB3aXRoIHdoZXRoZXIgdGhlIGFwcCBpcyBiZWluZyBjcmVhdGVkIG9yIGNhbGxlZAovLyBFdmVyeSBwb3NzaWJsZSBhY3Rpb24gZm9yIHRoaXMgY29udHJhY3QgaXMgcmVwcmVzZW50ZWQgaW4gdGhlIHN3aXRjaCBzdGF0ZW1lbnQKLy8gSWYgdGhlIGFjdGlvbiBpcyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGNvbnRyYWN0LCBpdHMgcmVzcGVjdGl2ZSBicmFuY2ggd2lsbCBiZSAiKk5PVF9JTVBMRU1FTlRFRCIgd2hpY2gganVzdCBjb250YWlucyAiZXJyIgp0eG4gQXBwbGljYXRpb25JRAohCmludCA2CioKdHhuIE9uQ29tcGxldGlvbgorCnN3aXRjaCAqY2FsbF9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKmNhbGxfRGVsZXRlQXBwbGljYXRpb24gKmNyZWF0ZV9Ob09wICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRCAqTk9UX0lNUExFTUVOVEVEICpOT1RfSU1QTEVNRU5URUQgKk5PVF9JTVBMRU1FTlRFRAoKKk5PVF9JTVBMRU1FTlRFRDoKCS8vIFRoZSByZXF1ZXN0ZWQgYWN0aW9uIGlzIG5vdCBpbXBsZW1lbnRlZCBpbiB0aGlzIGNvbnRyYWN0LiBBcmUgeW91IHVzaW5nIHRoZSBjb3JyZWN0IE9uQ29tcGxldGU/IERpZCB5b3Ugc2V0IHlvdXIgYXBwIElEPwoJZXJyCgovLyBjcmVhdGVBcHBsaWNhdGlvbih1aW50NjQpdm9pZAoqYWJpX3JvdXRlX2NyZWF0ZUFwcGxpY2F0aW9uOgoJLy8gYWNjb2xhZGVJZDogdWludDY0Cgl0eG5hIEFwcGxpY2F0aW9uQXJncyAxCglidG9pCgoJLy8gZXhlY3V0ZSBjcmVhdGVBcHBsaWNhdGlvbih1aW50NjQpdm9pZAoJY2FsbHN1YiBjcmVhdGVBcHBsaWNhdGlvbgoJaW50IDEKCXJldHVybgoKLy8gY3JlYXRlQXBwbGljYXRpb24oYWNjb2xhZGVJZDogdWludDY0KTogdm9pZApjcmVhdGVBcHBsaWNhdGlvbjoKCXByb3RvIDEgMAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjEyCgkvLyB0aGlzLmFkbWluQWRkcmVzcy52YWx1ZSA9IHRoaXMudHhuLnNlbmRlcgoJYnl0ZSAweDYxNjQ2ZDY5NmU0MTY0NjQ3MjY1NzM3MyAvLyAiYWRtaW5BZGRyZXNzIgoJdHhuIFNlbmRlcgoJYXBwX2dsb2JhbF9wdXQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czoxMwoJLy8gdGhpcy5hY2NvbGFkZUlkLnZhbHVlID0gYWNjb2xhZGVJZAoJYnl0ZSAweDYxNjM2MzZmNmM2MTY0NjU0OTY0IC8vICJhY2NvbGFkZUlkIgoJZnJhbWVfZGlnIC0xIC8vIGFjY29sYWRlSWQ6IHVpbnQ2NAoJYXBwX2dsb2JhbF9wdXQKCXJldHN1YgoKLy8gYWRkQWNjb2xhZGUodWludDY0KXZvaWQKKmFiaV9yb3V0ZV9hZGRBY2NvbGFkZToKCS8vIGFjY29sYWRlSWQ6IHVpbnQ2NAoJdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQoJYnRvaQoKCS8vIGV4ZWN1dGUgYWRkQWNjb2xhZGUodWludDY0KXZvaWQKCWNhbGxzdWIgYWRkQWNjb2xhZGUKCWludCAxCglyZXR1cm4KCi8vIGFkZEFjY29sYWRlKGFjY29sYWRlSWQ6IHVpbnQ2NCk6IHZvaWQKYWRkQWNjb2xhZGU6Cglwcm90byAxIDAKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czoxNwoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hZG1pbkFkZHJlc3MudmFsdWUpCgl0eG4gU2VuZGVyCglieXRlIDB4NjE2NDZkNjk2ZTQxNjQ2NDcyNjU3MzczIC8vICJhZG1pbkFkZHJlc3MiCglhcHBfZ2xvYmFsX2dldAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjE4CgkvLyBhc3NlcnQoYWNjb2xhZGVJZCAhPT0gMCkKCWZyYW1lX2RpZyAtMSAvLyBhY2NvbGFkZUlkOiB1aW50NjQKCWludCAwCgkhPQoJYXNzZXJ0CgoJLy8gY29udHJhY3RzL0FjY29sYWRlLmFsZ28udHM6MjAKCS8vIHNlbmRBc3NldFRyYW5zZmVyKHsKCS8vICAgICAgIHNlbmRlcjogdGhpcy5hcHAuYWRkcmVzcywKCS8vICAgICAgIGFzc2V0UmVjZWl2ZXI6IHRoaXMuYXBwLmFkZHJlc3MsCgkvLyAgICAgICBhc3NldEFtb3VudDogMCwKCS8vICAgICAgIHhmZXJBc3NldDogQXNzZXRJRC5mcm9tVWludDY0KGFjY29sYWRlSWQpLAoJLy8gICAgICAgZmVlOiAxMDAwLAoJLy8gICAgICAgLy9ub3RlOiAicmVnaXN0ZXJpbmcgYWNjb2xhZGU6ICIgKyBhY2NvbGFkZUlkCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCWludCBheGZlcgoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjIxCgkvLyBzZW5kZXI6IHRoaXMuYXBwLmFkZHJlc3MKCWdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCglpdHhuX2ZpZWxkIFNlbmRlcgoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjIyCgkvLyBhc3NldFJlY2VpdmVyOiB0aGlzLmFwcC5hZGRyZXNzCglnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwoJaXR4bl9maWVsZCBBc3NldFJlY2VpdmVyCgoJLy8gY29udHJhY3RzL0FjY29sYWRlLmFsZ28udHM6MjMKCS8vIGFzc2V0QW1vdW50OiAwCglpbnQgMAoJaXR4bl9maWVsZCBBc3NldEFtb3VudAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjI0CgkvLyB4ZmVyQXNzZXQ6IEFzc2V0SUQuZnJvbVVpbnQ2NChhY2NvbGFkZUlkKQoJZnJhbWVfZGlnIC0xIC8vIGFjY29sYWRlSWQ6IHVpbnQ2NAoJaXR4bl9maWVsZCBYZmVyQXNzZXQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czoyNQoJLy8gZmVlOiAxMDAwCglpbnQgMTAwMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglyZXRzdWIKCi8vIGNsYWltQWNjb2xhZGUoKXZvaWQKKmFiaV9yb3V0ZV9jbGFpbUFjY29sYWRlOgoJLy8gZXhlY3V0ZSBjbGFpbUFjY29sYWRlKCl2b2lkCgljYWxsc3ViIGNsYWltQWNjb2xhZGUKCWludCAxCglyZXR1cm4KCi8vIGNsYWltQWNjb2xhZGUoKTogdm9pZApjbGFpbUFjY29sYWRlOgoJcHJvdG8gMCAwCgoJLy8gUHVzaCBlbXB0eSBieXRlcyBhZnRlciB0aGUgZnJhbWUgcG9pbnRlciB0byByZXNlcnZlIHNwYWNlIGZvciBsb2NhbCB2YXJpYWJsZXMKCWJ5dGUgMHgKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czozMQoJLy8gYWNjb2xhZGVCYWxhbmNlID0gdGhpcy5hcHAuYWRkcmVzcy5hc3NldEJhbGFuY2UoQXNzZXRJRC5mcm9tVWludDY0KHRoaXMuYWNjb2xhZGVJZC52YWx1ZSkpCglnbG9iYWwgQ3VycmVudEFwcGxpY2F0aW9uQWRkcmVzcwoJYnl0ZSAweDYxNjM2MzZmNmM2MTY0NjU0OTY0IC8vICJhY2NvbGFkZUlkIgoJYXBwX2dsb2JhbF9nZXQKCWFzc2V0X2hvbGRpbmdfZ2V0IEFzc2V0QmFsYW5jZQoJcG9wCglmcmFtZV9idXJ5IDAgLy8gYWNjb2xhZGVCYWxhbmNlOiB1aW50NjQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czozMgoJLy8gYXNzZXJ0KGFjY29sYWRlQmFsYW5jZSA+IDApCglmcmFtZV9kaWcgMCAvLyBhY2NvbGFkZUJhbGFuY2U6IHVpbnQ2NAoJaW50IDAKCT4KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjM0CgkvLyBzZW5kQXNzZXRUcmFuc2Zlcih7CgkvLyAgICAgICB4ZmVyQXNzZXQ6IEFzc2V0SUQuZnJvbVVpbnQ2NCh0aGlzLmFjY29sYWRlSWQudmFsdWUpLAoJLy8gICAgICAgYXNzZXRBbW91bnQ6IDEsCgkvLyAgICAgICBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIsCgkvLyAgICAgICBmZWU6IDEwMDAsCgkvLyAgICAgICAvL25vdGU6ICJDbGFpbWluZyBhY2NvbGFkZTogIiArIHRoaXMuYWNjb2xhZGVJZC52YWx1ZSArICIgZm9yIGFkZHJlc3M6ICIgKyB0aGlzLnR4bi5zZW5kZXIKCS8vICAgICB9KQoJaXR4bl9iZWdpbgoJaW50IGF4ZmVyCglpdHhuX2ZpZWxkIFR5cGVFbnVtCgoJLy8gY29udHJhY3RzL0FjY29sYWRlLmFsZ28udHM6MzUKCS8vIHhmZXJBc3NldDogQXNzZXRJRC5mcm9tVWludDY0KHRoaXMuYWNjb2xhZGVJZC52YWx1ZSkKCWJ5dGUgMHg2MTYzNjM2ZjZjNjE2NDY1NDk2NCAvLyAiYWNjb2xhZGVJZCIKCWFwcF9nbG9iYWxfZ2V0CglpdHhuX2ZpZWxkIFhmZXJBc3NldAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjM2CgkvLyBhc3NldEFtb3VudDogMQoJaW50IDEKCWl0eG5fZmllbGQgQXNzZXRBbW91bnQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czozNwoJLy8gYXNzZXRSZWNlaXZlcjogdGhpcy50eG4uc2VuZGVyCgl0eG4gU2VuZGVyCglpdHhuX2ZpZWxkIEFzc2V0UmVjZWl2ZXIKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czozOAoJLy8gZmVlOiAxMDAwCglpbnQgMTAwMAoJaXR4bl9maWVsZCBGZWUKCgkvLyBTdWJtaXQgaW5uZXIgdHJhbnNhY3Rpb24KCWl0eG5fc3VibWl0CglyZXRzdWIKCi8vIHJldHJpZXZlQWNjb2xhZGUoKXZvaWQKKmFiaV9yb3V0ZV9yZXRyaWV2ZUFjY29sYWRlOgoJLy8gZXhlY3V0ZSByZXRyaWV2ZUFjY29sYWRlKCl2b2lkCgljYWxsc3ViIHJldHJpZXZlQWNjb2xhZGUKCWludCAxCglyZXR1cm4KCi8vIHJldHJpZXZlQWNjb2xhZGUoKTogdm9pZApyZXRyaWV2ZUFjY29sYWRlOgoJcHJvdG8gMCAwCgoJLy8gUHVzaCBlbXB0eSBieXRlcyBhZnRlciB0aGUgZnJhbWUgcG9pbnRlciB0byByZXNlcnZlIHNwYWNlIGZvciBsb2NhbCB2YXJpYWJsZXMKCWJ5dGUgMHgKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czo0NAoJLy8gYXNzZXJ0KHRoaXMudHhuLnNlbmRlciA9PT0gdGhpcy5hZG1pbkFkZHJlc3MudmFsdWUpCgl0eG4gU2VuZGVyCglieXRlIDB4NjE2NDZkNjk2ZTQxNjQ2NDcyNjU3MzczIC8vICJhZG1pbkFkZHJlc3MiCglhcHBfZ2xvYmFsX2dldAoJPT0KCWFzc2VydAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjQ1CgkvLyBhc3NlcnQodGhpcy5hcHAuYWRkcmVzcy5hc3NldEJhbGFuY2UoQXNzZXRJRC5mcm9tVWludDY0KHRoaXMuYWNjb2xhZGVJZC52YWx1ZSkpID4gMCkKCWdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCglieXRlIDB4NjE2MzYzNmY2YzYxNjQ2NTQ5NjQgLy8gImFjY29sYWRlSWQiCglhcHBfZ2xvYmFsX2dldAoJYXNzZXRfaG9sZGluZ19nZXQgQXNzZXRCYWxhbmNlCglwb3AKCWludCAwCgk+Cglhc3NlcnQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czo0NwoJLy8gYmFsYW5jZSA9IHRoaXMuYXBwLmFkZHJlc3MuYXNzZXRCYWxhbmNlKEFzc2V0SUQuZnJvbVVpbnQ2NCh0aGlzLmFjY29sYWRlSWQudmFsdWUpKQoJZ2xvYmFsIEN1cnJlbnRBcHBsaWNhdGlvbkFkZHJlc3MKCWJ5dGUgMHg2MTYzNjM2ZjZjNjE2NDY1NDk2NCAvLyAiYWNjb2xhZGVJZCIKCWFwcF9nbG9iYWxfZ2V0Cglhc3NldF9ob2xkaW5nX2dldCBBc3NldEJhbGFuY2UKCXBvcAoJZnJhbWVfYnVyeSAwIC8vIGJhbGFuY2U6IHVpbnQ2NAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjQ5CgkvLyBzZW5kQXNzZXRUcmFuc2Zlcih7CgkvLyAgICAgICB4ZmVyQXNzZXQ6IEFzc2V0SUQuZnJvbVVpbnQ2NCh0aGlzLmFjY29sYWRlSWQudmFsdWUpLAoJLy8gICAgICAgYXNzZXRBbW91bnQ6IGJhbGFuY2UsCgkvLyAgICAgICBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIsCgkvLyAgICAgICBmZWU6IDEwMDAsCgkvLyAgICAgICAvL25vdGU6ICJyZXRyaWV2aW5nIGFjY29sYWRlOiAiICsgdGhpcy5hY2NvbGFkZUlkLnZhbHVlCgkvLyAgICAgfSkKCWl0eG5fYmVnaW4KCWludCBheGZlcgoJaXR4bl9maWVsZCBUeXBlRW51bQoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjUwCgkvLyB4ZmVyQXNzZXQ6IEFzc2V0SUQuZnJvbVVpbnQ2NCh0aGlzLmFjY29sYWRlSWQudmFsdWUpCglieXRlIDB4NjE2MzYzNmY2YzYxNjQ2NTQ5NjQgLy8gImFjY29sYWRlSWQiCglhcHBfZ2xvYmFsX2dldAoJaXR4bl9maWVsZCBYZmVyQXNzZXQKCgkvLyBjb250cmFjdHMvQWNjb2xhZGUuYWxnby50czo1MQoJLy8gYXNzZXRBbW91bnQ6IGJhbGFuY2UKCWZyYW1lX2RpZyAwIC8vIGJhbGFuY2U6IHVpbnQ2NAoJaXR4bl9maWVsZCBBc3NldEFtb3VudAoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjUyCgkvLyBhc3NldFJlY2VpdmVyOiB0aGlzLnR4bi5zZW5kZXIKCXR4biBTZW5kZXIKCWl0eG5fZmllbGQgQXNzZXRSZWNlaXZlcgoKCS8vIGNvbnRyYWN0cy9BY2NvbGFkZS5hbGdvLnRzOjUzCgkvLyBmZWU6IDEwMDAKCWludCAxMDAwCglpdHhuX2ZpZWxkIEZlZQoKCS8vIFN1Ym1pdCBpbm5lciB0cmFuc2FjdGlvbgoJaXR4bl9zdWJtaXQKCXJldHN1YgoKLy8gZGVsZXRlQXBwbGljYXRpb24oKXZvaWQKKmFiaV9yb3V0ZV9kZWxldGVBcHBsaWNhdGlvbjoKCS8vIGV4ZWN1dGUgZGVsZXRlQXBwbGljYXRpb24oKXZvaWQKCWNhbGxzdWIgZGVsZXRlQXBwbGljYXRpb24KCWludCAxCglyZXR1cm4KCi8vIGRlbGV0ZUFwcGxpY2F0aW9uKCk6IHZvaWQKZGVsZXRlQXBwbGljYXRpb246Cglwcm90byAwIDAKCXJldHN1YgoKKmNyZWF0ZV9Ob09wOgoJbWV0aG9kICJjcmVhdGVBcHBsaWNhdGlvbih1aW50NjQpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfY3JlYXRlQXBwbGljYXRpb24KCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY3JlYXRlIE5vT3AKCWVycgoKKmNhbGxfTm9PcDoKCW1ldGhvZCAiYWRkQWNjb2xhZGUodWludDY0KXZvaWQiCgltZXRob2QgImNsYWltQWNjb2xhZGUoKXZvaWQiCgltZXRob2QgInJldHJpZXZlQWNjb2xhZGUoKXZvaWQiCgl0eG5hIEFwcGxpY2F0aW9uQXJncyAwCgltYXRjaCAqYWJpX3JvdXRlX2FkZEFjY29sYWRlICphYmlfcm91dGVfY2xhaW1BY2NvbGFkZSAqYWJpX3JvdXRlX3JldHJpZXZlQWNjb2xhZGUKCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBOb09wCgllcnIKCipjYWxsX0RlbGV0ZUFwcGxpY2F0aW9uOgoJbWV0aG9kICJkZWxldGVBcHBsaWNhdGlvbigpdm9pZCIKCXR4bmEgQXBwbGljYXRpb25BcmdzIDAKCW1hdGNoICphYmlfcm91dGVfZGVsZXRlQXBwbGljYXRpb24KCgkvLyB0aGlzIGNvbnRyYWN0IGRvZXMgbm90IGltcGxlbWVudCB0aGUgZ2l2ZW4gQUJJIG1ldGhvZCBmb3IgY2FsbCBEZWxldGVBcHBsaWNhdGlvbgoJZXJy",
    "clear": "I3ByYWdtYSB2ZXJzaW9uIDk="
  },
  "contract": {
    "name": "Accolade",
    "desc": "",
    "methods": [
      {
        "name": "createApplication",
        "args": [
          {
            "name": "accoladeId",
            "type": "uint64"
          }
        ],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "addAccolade",
        "args": [
          {
            "name": "accoladeId",
            "type": "uint64"
          }
        ],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "claimAccolade",
        "args": [],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "retrieveAccolade",
        "args": [],
        "returns": {
          "type": "void"
        }
      },
      {
        "name": "deleteApplication",
        "args": [],
        "returns": {
          "type": "void"
        }
      }
    ]
  }
}

/**
 * Defines an onCompletionAction of 'no_op'
 */
export type OnCompleteNoOp =  { onCompleteAction?: 'no_op' | OnApplicationComplete.NoOpOC }
/**
 * Defines an onCompletionAction of 'opt_in'
 */
export type OnCompleteOptIn =  { onCompleteAction: 'opt_in' | OnApplicationComplete.OptInOC }
/**
 * Defines an onCompletionAction of 'close_out'
 */
export type OnCompleteCloseOut =  { onCompleteAction: 'close_out' | OnApplicationComplete.CloseOutOC }
/**
 * Defines an onCompletionAction of 'delete_application'
 */
export type OnCompleteDelApp =  { onCompleteAction: 'delete_application' | OnApplicationComplete.DeleteApplicationOC }
/**
 * Defines an onCompletionAction of 'update_application'
 */
export type OnCompleteUpdApp =  { onCompleteAction: 'update_application' | OnApplicationComplete.UpdateApplicationOC }
/**
 * A state record containing a single unsigned integer
 */
export type IntegerState = {
  /**
   * Gets the state value as a BigInt.
   */
  asBigInt(): bigint
  /**
   * Gets the state value as a number.
   */
  asNumber(): number
}
/**
 * A state record containing binary data
 */
export type BinaryState = {
  /**
   * Gets the state value as a Uint8Array
   */
  asByteArray(): Uint8Array
  /**
   * Gets the state value as a string
   */
  asString(): string
}

export type AppCreateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult> & AppReference
export type AppUpdateCallTransactionResult = AppCallTransactionResult & Partial<AppCompilationResult>

export type AppClientComposeCallCoreParams = Omit<AppClientCallCoreParams, 'sendParams'> & {
  sendParams?: Omit<SendTransactionParams, 'skipSending' | 'atc' | 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources'>
}
export type AppClientComposeExecuteParams = Pick<SendTransactionParams, 'skipWaiting' | 'maxRoundsToWaitForConfirmation' | 'populateAppCallResources' | 'suppressLog'>

/**
 * Defines the types of available calls and state of the Accolade smart contract.
 */
export type Accolade = {
  /**
   * Maps method signatures / names to their argument and return types.
   */
  methods:
    & Record<'createApplication(uint64)void' | 'createApplication', {
      argsObj: {
        accoladeId: bigint | number
      }
      argsTuple: [accoladeId: bigint | number]
      returns: void
    }>
    & Record<'addAccolade(uint64)void' | 'addAccolade', {
      argsObj: {
        accoladeId: bigint | number
      }
      argsTuple: [accoladeId: bigint | number]
      returns: void
    }>
    & Record<'claimAccolade()void' | 'claimAccolade', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
    & Record<'retrieveAccolade()void' | 'retrieveAccolade', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
    & Record<'deleteApplication()void' | 'deleteApplication', {
      argsObj: {
      }
      argsTuple: []
      returns: void
    }>
  /**
   * Defines the shape of the global and local state of the application.
   */
  state: {
    global: {
      'accoladeId'?: IntegerState
      'adminAddress'?: BinaryState
    }
  }
}
/**
 * Defines the possible abi call signatures
 */
export type AccoladeSig = keyof Accolade['methods']
/**
 * Defines an object containing all relevant parameters for a single call to the contract. Where TSignature is undefined, a bare call is made
 */
export type TypedCallParams<TSignature extends AccoladeSig | undefined> = {
  method: TSignature
  methodArgs: TSignature extends undefined ? undefined : Array<ABIAppCallArg | undefined>
} & AppClientCallCoreParams & CoreAppCallArgs
/**
 * Defines the arguments required for a bare call
 */
export type BareCallArgs = Omit<RawAppCallArgs, keyof CoreAppCallArgs>
/**
 * Maps a method signature from the Accolade smart contract to the method's arguments in either tuple of struct form
 */
export type MethodArgs<TSignature extends AccoladeSig> = Accolade['methods'][TSignature]['argsObj' | 'argsTuple']
/**
 * Maps a method signature from the Accolade smart contract to the method's return type
 */
export type MethodReturn<TSignature extends AccoladeSig> = Accolade['methods'][TSignature]['returns']

/**
 * A factory for available 'create' calls
 */
export type AccoladeCreateCalls = (typeof AccoladeCallFactory)['create']
/**
 * Defines supported create methods for this smart contract
 */
export type AccoladeCreateCallParams =
  | (TypedCallParams<'createApplication(uint64)void'> & (OnCompleteNoOp))
/**
 * A factory for available 'delete' calls
 */
export type AccoladeDeleteCalls = (typeof AccoladeCallFactory)['delete']
/**
 * Defines supported delete methods for this smart contract
 */
export type AccoladeDeleteCallParams =
  | TypedCallParams<'deleteApplication()void'>
/**
 * Defines arguments required for the deploy method.
 */
export type AccoladeDeployArgs = {
  deployTimeParams?: TealTemplateParams
  /**
   * A delegate which takes a create call factory and returns the create call params for this smart contract
   */
  createCall?: (callFactory: AccoladeCreateCalls) => AccoladeCreateCallParams
  /**
   * A delegate which takes a delete call factory and returns the delete call params for this smart contract
   */
  deleteCall?: (callFactory: AccoladeDeleteCalls) => AccoladeDeleteCallParams
}


/**
 * Exposes methods for constructing all available smart contract calls
 */
export abstract class AccoladeCallFactory {
  /**
   * Gets available create call factories
   */
  static get create() {
    return {
      /**
       * Constructs a create call for the Accolade smart contract using the createApplication(uint64)void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      createApplication(args: MethodArgs<'createApplication(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return {
          method: 'createApplication(uint64)void' as const,
          methodArgs: Array.isArray(args) ? args : [args.accoladeId],
          ...params,
        }
      },
    }
  }

  /**
   * Gets available delete call factories
   */
  static get delete() {
    return {
      /**
       * Constructs a delete call for the Accolade smart contract using the deleteApplication()void ABI method
       *
       * @param args Any args for the contract call
       * @param params Any additional parameters for the call
       * @returns A TypedCallParams object for the call
       */
      deleteApplication(args: MethodArgs<'deleteApplication()void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
        return {
          method: 'deleteApplication()void' as const,
          methodArgs: Array.isArray(args) ? args : [],
          ...params,
        }
      },
    }
  }

  /**
   * Constructs a no op call for the addAccolade(uint64)void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static addAccolade(args: MethodArgs<'addAccolade(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'addAccolade(uint64)void' as const,
      methodArgs: Array.isArray(args) ? args : [args.accoladeId],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the claimAccolade()void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static claimAccolade(args: MethodArgs<'claimAccolade()void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'claimAccolade()void' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
  /**
   * Constructs a no op call for the retrieveAccolade()void ABI method
   *
   * @param args Any args for the contract call
   * @param params Any additional parameters for the call
   * @returns A TypedCallParams object for the call
   */
  static retrieveAccolade(args: MethodArgs<'retrieveAccolade()void'>, params: AppClientCallCoreParams & CoreAppCallArgs) {
    return {
      method: 'retrieveAccolade()void' as const,
      methodArgs: Array.isArray(args) ? args : [],
      ...params,
    }
  }
}

/**
 * A client to make calls to the Accolade smart contract
 */
export class AccoladeClient {
  /**
   * The underlying `ApplicationClient` for when you want to have more flexibility
   */
  public readonly appClient: ApplicationClient

  private readonly sender: SendTransactionFrom | undefined

  /**
   * Creates a new instance of `AccoladeClient`
   *
   * @param appDetails appDetails The details to identify the app to deploy
   * @param algod An algod client instance
   */
  constructor(appDetails: AppDetails, private algod: Algodv2) {
    this.sender = appDetails.sender
    this.appClient = algokit.getAppClient({
      ...appDetails,
      app: APP_SPEC
    }, algod)
  }

  /**
   * Checks for decode errors on the AppCallTransactionResult and maps the return value to the specified generic type
   *
   * @param result The AppCallTransactionResult to be mapped
   * @param returnValueFormatter An optional delegate to format the return value if required
   * @returns The smart contract response with an updated return value
   */
  protected mapReturnValue<TReturn, TResult extends AppCallTransactionResult = AppCallTransactionResult>(result: AppCallTransactionResult, returnValueFormatter?: (value: any) => TReturn): AppCallTransactionResultOfType<TReturn> & TResult {
    if(result.return?.decodeError) {
      throw result.return.decodeError
    }
    const returnValue = result.return?.returnValue !== undefined && returnValueFormatter !== undefined
      ? returnValueFormatter(result.return.returnValue)
      : result.return?.returnValue as TReturn | undefined
      return { ...result, return: returnValue } as AppCallTransactionResultOfType<TReturn> & TResult
  }

  /**
   * Calls the ABI method with the matching signature using an onCompletion code of NO_OP
   *
   * @param typedCallParams An object containing the method signature, args, and any other relevant parameters
   * @param returnValueFormatter An optional delegate which when provided will be used to map non-undefined return values to the target type
   * @returns The result of the smart contract call
   */
  public async call<TSignature extends keyof Accolade['methods']>(typedCallParams: TypedCallParams<TSignature>, returnValueFormatter?: (value: any) => MethodReturn<TSignature>) {
    return this.mapReturnValue<MethodReturn<TSignature>>(await this.appClient.call(typedCallParams), returnValueFormatter)
  }

  /**
   * Idempotently deploys the Accolade smart contract.
   *
   * @param params The arguments for the contract calls and any additional parameters for the call
   * @returns The deployment result
   */
  public deploy(params: AccoladeDeployArgs & AppClientDeployCoreParams = {}): ReturnType<ApplicationClient['deploy']> {
    const createArgs = params.createCall?.(AccoladeCallFactory.create)
    const deleteArgs = params.deleteCall?.(AccoladeCallFactory.delete)
    return this.appClient.deploy({
      ...params,
      deleteArgs,
      createArgs,
      createOnCompleteAction: createArgs?.onCompleteAction,
    })
  }

  /**
   * Gets available create methods
   */
  public get create() {
    const $this = this
    return {
      /**
       * Creates a new instance of the Accolade smart contract using the createApplication(uint64)void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The create result
       */
      async createApplication(args: MethodArgs<'createApplication(uint64)void'>, params: AppClientCallCoreParams & AppClientCompilationParams & (OnCompleteNoOp) = {}) {
        return $this.mapReturnValue<MethodReturn<'createApplication(uint64)void'>, AppCreateCallTransactionResult>(await $this.appClient.create(AccoladeCallFactory.create.createApplication(args, params)))
      },
    }
  }

  /**
   * Gets available delete methods
   */
  public get delete() {
    const $this = this
    return {
      /**
       * Deletes an existing instance of the Accolade smart contract using the deleteApplication()void ABI method.
       *
       * @param args The arguments for the smart contract call
       * @param params Any additional parameters for the call
       * @returns The delete result
       */
      async deleteApplication(args: MethodArgs<'deleteApplication()void'>, params: AppClientCallCoreParams = {}) {
        return $this.mapReturnValue<MethodReturn<'deleteApplication()void'>>(await $this.appClient.delete(AccoladeCallFactory.delete.deleteApplication(args, params)))
      },
    }
  }

  /**
   * Makes a clear_state call to an existing instance of the Accolade smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The clear_state result
   */
  public clearState(args: BareCallArgs & AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.appClient.clearState(args)
  }

  /**
   * Calls the addAccolade(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public addAccolade(args: MethodArgs<'addAccolade(uint64)void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AccoladeCallFactory.addAccolade(args, params))
  }

  /**
   * Calls the claimAccolade()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public claimAccolade(args: MethodArgs<'claimAccolade()void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AccoladeCallFactory.claimAccolade(args, params))
  }

  /**
   * Calls the retrieveAccolade()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The result of the call
   */
  public retrieveAccolade(args: MethodArgs<'retrieveAccolade()void'>, params: AppClientCallCoreParams & CoreAppCallArgs = {}) {
    return this.call(AccoladeCallFactory.retrieveAccolade(args, params))
  }

  /**
   * Extracts a binary state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns A BinaryState instance containing the state value, or undefined if the key was not found
   */
  private static getBinaryState(state: AppState, key: string): BinaryState | undefined {
    const value = state[key]
    if (!value) return undefined
    if (!('valueRaw' in value))
      throw new Error(`Failed to parse state value for ${key}; received an int when expected a byte array`)
    return {
      asString(): string {
        return value.value
      },
      asByteArray(): Uint8Array {
        return value.valueRaw
      }
    }
  }

  /**
   * Extracts a integer state value out of an AppState dictionary
   *
   * @param state The state dictionary containing the state value
   * @param key The key of the state value
   * @returns An IntegerState instance containing the state value, or undefined if the key was not found
   */
  private static getIntegerState(state: AppState, key: string): IntegerState | undefined {
    const value = state[key]
    if (!value) return undefined
    if ('valueRaw' in value)
      throw new Error(`Failed to parse state value for ${key}; received a byte array when expected a number`)
    return {
      asBigInt() {
        return typeof value.value === 'bigint' ? value.value : BigInt(value.value)
      },
      asNumber(): number {
        return typeof value.value === 'bigint' ? Number(value.value) : value.value
      },
    }
  }

  /**
   * Returns the smart contract's global state wrapped in a strongly typed accessor with options to format the stored value
   */
  public async getGlobalState(): Promise<Accolade['state']['global']> {
    const state = await this.appClient.getGlobalState()
    return {
      get accoladeId() {
        return AccoladeClient.getIntegerState(state, 'accoladeId')
      },
      get adminAddress() {
        return AccoladeClient.getBinaryState(state, 'adminAddress')
      },
    }
  }

  public compose(): AccoladeComposer {
    const client = this
    const atc = new AtomicTransactionComposer()
    let promiseChain:Promise<unknown> = Promise.resolve()
    const resultMappers: Array<undefined | ((x: any) => any)> = []
    return {
      addAccolade(args: MethodArgs<'addAccolade(uint64)void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.addAccolade(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      claimAccolade(args: MethodArgs<'claimAccolade()void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.claimAccolade(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      retrieveAccolade(args: MethodArgs<'retrieveAccolade()void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.retrieveAccolade(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      get delete() {
        const $this = this
        return {
          deleteApplication(args: MethodArgs<'deleteApplication()void'>, params?: AppClientComposeCallCoreParams) {
            promiseChain = promiseChain.then(() => client.delete.deleteApplication(args, {...params, sendParams: {...params?.sendParams, skipSending: true, atc}}))
            resultMappers.push(undefined)
            return $this
          },
        }
      },
      clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs) {
        promiseChain = promiseChain.then(() => client.clearState({...args, sendParams: {...args?.sendParams, skipSending: true, atc}}))
        resultMappers.push(undefined)
        return this
      },
      addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom) {
        promiseChain = promiseChain.then(async () => atc.addTransaction(await algokit.getTransactionWithSigner(txn, defaultSender ?? client.sender)))
        return this
      },
      async atc() {
        await promiseChain
        return atc
      },
      async simulate(options?: SimulateOptions) {
        await promiseChain
        const result = await atc.simulate(client.algod, new modelsv2.SimulateRequest({ txnGroups: [], ...options }))
        return {
          ...result,
          returns: result.methodResults?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      },
      async execute(sendParams?: AppClientComposeExecuteParams) {
        await promiseChain
        const result = await algokit.sendAtomicTransactionComposer({ atc, sendParams }, client.algod)
        return {
          ...result,
          returns: result.returns?.map((val, i) => resultMappers[i] !== undefined ? resultMappers[i]!(val.returnValue) : val.returnValue)
        }
      }
    } as unknown as AccoladeComposer
  }
}
export type AccoladeComposer<TReturns extends [...any[]] = []> = {
  /**
   * Calls the addAccolade(uint64)void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  addAccolade(args: MethodArgs<'addAccolade(uint64)void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AccoladeComposer<[...TReturns, MethodReturn<'addAccolade(uint64)void'>]>

  /**
   * Calls the claimAccolade()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  claimAccolade(args: MethodArgs<'claimAccolade()void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AccoladeComposer<[...TReturns, MethodReturn<'claimAccolade()void'>]>

  /**
   * Calls the retrieveAccolade()void ABI method.
   *
   * @param args The arguments for the contract call
   * @param params Any additional parameters for the call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  retrieveAccolade(args: MethodArgs<'retrieveAccolade()void'>, params?: AppClientComposeCallCoreParams & CoreAppCallArgs): AccoladeComposer<[...TReturns, MethodReturn<'retrieveAccolade()void'>]>

  /**
   * Gets available delete methods
   */
  readonly delete: {
    /**
     * Deletes an existing instance of the Accolade smart contract using the deleteApplication()void ABI method.
     *
     * @param args The arguments for the smart contract call
     * @param params Any additional parameters for the call
     * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
     */
    deleteApplication(args: MethodArgs<'deleteApplication()void'>, params?: AppClientComposeCallCoreParams): AccoladeComposer<[...TReturns, MethodReturn<'deleteApplication()void'>]>
  }

  /**
   * Makes a clear_state call to an existing instance of the Accolade smart contract.
   *
   * @param args The arguments for the bare call
   * @returns The typed transaction composer so you can fluently chain multiple calls or call execute to execute all queued up transactions
   */
  clearState(args?: BareCallArgs & AppClientComposeCallCoreParams & CoreAppCallArgs): AccoladeComposer<[...TReturns, undefined]>

  /**
   * Adds a transaction to the composer
   *
   * @param txn One of: A TransactionWithSigner object (returned as is), a TransactionToSign object (signer is obtained from the signer property), a Transaction object (signer is extracted from the defaultSender parameter), an async SendTransactionResult returned by one of algokit utils helpers (signer is obtained from the defaultSender parameter)
   * @param defaultSender The default sender to be used to obtain a signer where the object provided to the transaction parameter does not include a signer.
   */
  addTransaction(txn: TransactionWithSigner | TransactionToSign | Transaction | Promise<SendTransactionResult>, defaultSender?: SendTransactionFrom): AccoladeComposer<TReturns>
  /**
   * Returns the underlying AtomicTransactionComposer instance
   */
  atc(): Promise<AtomicTransactionComposer>
  /**
   * Simulates the transaction group and returns the result
   */
  simulate(options?: SimulateOptions): Promise<AccoladeComposerSimulateResult<TReturns>>
  /**
   * Executes the transaction group and returns the results
   */
  execute(sendParams?: AppClientComposeExecuteParams): Promise<AccoladeComposerResults<TReturns>>
}
export type SimulateOptions = Omit<ConstructorParameters<typeof modelsv2.SimulateRequest>[0], 'txnGroups'>
export type AccoladeComposerSimulateResult<TReturns extends [...any[]]> = {
  returns: TReturns
  methodResults: ABIResult[]
  simulateResponse: modelsv2.SimulateResponse
}
export type AccoladeComposerResults<TReturns extends [...any[]]> = {
  returns: TReturns
  groupId: string
  txIds: string[]
  transactions: Transaction[]
}
